import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { ProductPortionCard } from "../../components/ProductPortionCard";
import { withSurfaces } from "../../hoc/withSurfaces";
import { addCart } from "../../services/addCart";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/getProduct";
import { ToastContainer, toast } from "react-toastify";

export const OrientationsComponent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: { name: '' },
    description: '',
    image: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCartClick = async () => {
    try {
      const productId = parseInt(id, 10); // Converte para número
      await addCart(productId, 1);
      toast.success("Produto adicionado no carrinho!");
    } catch (err) {
      toast.error("Erro ao adicionar produto no carrinho!");
    }
  };

  return (
    <>
      <ToastContainer />

      <section className="container mx-auto mt-20 flex items-center flex-col">
        {product && (
          <>
            <div className="w-full mb-8 flex items-center flex-col">
              <img className="w-full md:w-96 mb-4 self-center" src={product.image} alt="" />
              <br />
              <br />
              <div className="flex flex-col items-center">
                <ProductPortionCard 
                  title="Nome"
                  desc={String(product.name)} 
                />
                <ProductPortionCard 
                  title="Preço"
                  desc={String(product.price)} 
                />
                <ProductPortionCard 
                  title="Categoria"
                  desc={product.category?.name}
                />
                <ProductPortionCard 
                  title="Descrição"
                  desc={String(product.description)}
                  style={{ opacity: 0.7 }}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button 
                text="Adicionar ao carrinho" 
                type="primary" 
                size="lg" 
                onBtnClick={handleAddToCartClick}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
}

export const Orientations = withSurfaces(OrientationsComponent);
