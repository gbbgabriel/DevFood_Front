import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import bgHamburguerDesenho from "../../assets/images/bg_hamburguer_desenho.png";
import { Button } from "../../components/Button";
import { ProductPortionCard } from "../../components/ProductPortionCard";
import { withSurfaces } from "../../hoc/withSurfaces";
import { addCart } from "../../services/addCart";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/getProduct";
import { ToastContainer, toast } from "react-toastify";

export const OrientationsComponent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
      await addCart(id, 1);
      toast.success("Produto adicionado no carrinho!");
    } catch (err) {
      toast.error("Erro ao adicionar produto no carrinho!");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full justify-center">
        <img className="h-[350px]" width="100%" src={bgHamburguerDesenho} alt="Banner hamburguer" />
      </div>

      <section className="container mx-auto mt-20 flex items-center flex-col">
        {product && (
          <>
            <div className="w-full mb-8">
              <img className="w-44 mb-4 self-center" src={product.image} alt="" />
              <div className="flex flex-col items-center">
                <ProductPortionCard 
                  title="Nome"
                  desc={product.name} 
                />
                <ProductPortionCard 
                  title="Price"
                  desc={product.price} 
                />
                <ProductPortionCard 
                  title="Categoria"
                  desc={product.category?.name}
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
              <Button text="Personalizar pedido" type="primary" size="lg" />
            </div>
          </>
        )}
      </section>
    </>
  );
}

export const Orientations = withSurfaces(OrientationsComponent);
