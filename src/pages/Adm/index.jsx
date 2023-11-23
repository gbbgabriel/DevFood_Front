import { useEffect, useReducer, useState } from "react";
import { Button } from "../../components/Button";
import { getCategories } from "../../services/getCategories";
import { getProducts } from "../../services/getProducts";
import { getCategory } from "../../services/getCategory";
import { getProduct } from "../../services/getProduct";
import { updateCategory } from "../../services/updateCategory";
import { updateProduct } from "../../services/updateProduct";
import { ToastContainer, toast } from "react-toastify";
import { deleteCategory } from "../../services/deleteCategory";
import { deleteProduct } from "../../services/deleteProduct";
import { ItemModal } from "../../components/ItemModal";
import { AddCategoryModal } from "../../components/AddCategoryModal";
import { AddProductModal } from "../../components/AddProductModal";

const initialData = {
  name: "",
  description: "",
  price: "",
  category: "",
  image: "",
  status: "",
  createdAt: "",
  updatedAt: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "category_name":
      return { ...state, name: action.payload };
    case "product_name":
      return { ...state, name: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "category_id":
      return { ...state, category: action.payload };
    case "image":
      return { ...state, image: action.payload };
    case "status":
      return { ...state, status: action.payload };
    case "createdAt":
      return { ...state, createdAt: action.payload };
    case "updatedAt":
      return { ...state, updatedAt: action.payload };
    default:
      return state;
  }

}

export const Adm = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openProductModal, setOpenProductModal] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (err) {
        toast.error("Erro ao buscar categorias");
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (err) {
        toast.error("Erro ao buscar produtos");
      }
    })()
  }, [])

  const handleOpenUpdateModal = async (id, type) => {
    setCategory({});
    setProduct({});
    if (type === "category") {
      try {
        const response = await getCategory(id);
        setCategory(response);      
      } catch (err) {
        toast.error("Erro ao buscar categoria");
      }
    } else if (type === "product") {
      try {
        const response = await getProduct(id);
        setProduct(response);      
      } catch (err) {
        toast.error("Erro ao buscar produto");
      }
    }
  }

  const handleSaveUpdate = async () => {
    if (category) {
      try {
        await updateCategory(category.id, {
          name: state.category_name,
        });
        const newCategories = categories.map((category) => {
          if (category.id === category.id) {
            return category;
          }
          return category;
        });
        setCategories(newCategories);
        toast.success("Categoria atualizada com sucesso");
        return;
      } catch (err) {
        toast.error("Erro ao atualizar categoria");
        return;
      }
    } else if (product) {
      try {
        await updateProduct(product.id, {
          categoryId: state.category_id,
          name: state.product_name,        
          price: state.price,        
          image: state.image,        
        });
        const newProducts = products.map((product) => {
          if (product.id === product.id) {
            return product;
          }
          return product;
        });
        setProducts(newProducts);
        toast.success("Produto atualizado com sucesso");
        return;
      } catch (err) {
        toast.error("Erro ao atualizar produto");
        return;      
      }
    }    
  }

  const handleDelete = async (id, type) => {
    if (type === "category") {
      try {
        await deleteCategory(id);
        const newCategories = categories.filter((category) => category.id !== id);
        setCategories(newCategories);
        toast.success("Categoria removida com sucesso");
        return;
      } catch (err) {
        toast.error("Erro ao remover categoria");
        return;
      }
    } else if (type === "product") {
      try {
        await deleteProduct(id);
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        toast.success("Produto removido com sucesso");
        return;
      } catch (err) {
        toast.error("Erro ao remover produto");
        return;      
      }
    }
  }

  const handleOpenAddCategoryModal = () => {
    setOpenProductModal(false);
    setOpenCategoryModal(true);
  }

  const handleOpenAddProductModal = () => {
    setOpenCategoryModal(false);
    setOpenProductModal(true);
  }

  const handleSaveCategory = async () => {
    try {
      await fetch("http://localhost:8080/category", {
        method: "POST",
        body: JSON.stringify(category),
        headers: {
          "Content-type": "application/json",
          "Authorization": localStorage.getItem("@token")
        }
      })
      toast.success("Categoria salva com sucesso");
    } catch (err) {
      toast.error("Erro ao salvar categoria");
    }
  }

  const handleSaveProduct = async () => {
    try {
      await fetch("http://localhost:8080/product", {
        method: "POST",
        body: JSON.stringify(category),
        headers: {
          "Content-type": "application/json",
          "Authorization": localStorage.getItem("@token")
        }
      })
      toast.success("Produto salvo com sucesso");
    } catch (err) {
      toast.error("Erro ao salvar produto");
    }
  }

  return (
    <div className="container mx-auto">
      <ToastContainer />
      {(category || product) && (
        <ItemModal type={category ? "category" : "product"} dispatch={dispatch} data={category || product} handleSaveUpdate={handleSaveUpdate} />
      )}
      {openCategoryModal && (
        <AddCategoryModal handleSaveAddCategory={handleSaveCategory} setCategory={setCategory}  />
      )}
      {openProductModal && (
        <AddProductModal handleSaveAddProduct={handleSaveProduct} setProduct={setProduct} />
      )}
      <div className="flex flex-col mb-32">
        <Button className="mb-10 bg-blue-600 text-white" text="Adicionar" size="sm" onBtnClick={handleOpenAddCategoryModal} />
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{category.name}</td>
                <td>
                  <Button className="bg-yellow-400 text-white" text="Editar" size="sm" onBtnClick={() => handleOpenUpdateModal(category.id, "category")} />
                  <Button className="bg-red-600 text-white" text="Remover" size="sm" onBtnClick={() => handleDelete(category.id, "category")} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col">
        <Button className="mb-10 bg-blue-600 text-white" text="Adicionar" size="sm" onBtnClick={handleOpenAddProductModal} />
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <Button className="bg-yellow-400 text-white" text="Editar" size="sm" onBtnClick={() => handleOpenUpdateModal(product.id, "product")} />
                  <Button className="bg-red-600 text-white" text="Remover" size="sm" onBtnClick={() => handleDelete(product.id, "product")} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}