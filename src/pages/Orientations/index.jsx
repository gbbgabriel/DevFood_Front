import 'react-toastify/dist/ReactToastify.css'
import { useParams, useLocation } from "react-router-dom";
import bgHamburguerDesenho from "../../assets/images/bg_hamburguer_desenho.png";
import { Button } from "../../components/Button";
import { CardNews } from "../../components/CardNews";
import { ProductPortionCard } from "../../components/ProductPortionCard";
import { withSurfaces } from "../../hoc/withSurfaces";
import { addCart } from "../../services/addCart";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/getProduct";
import { ToastContainer, toast } from "react-toastify";

export const OrientationsComponent = () => {
  const { id } = useParams();
  const { state: { imgUrl } } = useLocation();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getProduct(id)
      setProduct(data);
    })()
  }, [id])

  const handleAddToCartClick = async () => {
    try {
      await addCart(id, 1);
      toast.success("Produto adicionado no carrinho!");
    } catch (err) {
      toast.error("Erro ao adicionar produto no carrinho!");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="w-full justify-center">
        <img className="h-[350px]" width="100%" src={bgHamburguerDesenho} alt="Banner hamburguer" />
      </div>

      <section className="container mx-auto mt-20 flex items-center">
        <div className="w-full flex items-end">
          {/* <h3 className="font-bold text-lg mb-8">Ingredientes</h3>
          <div className="flex flex-wrap items-center gap-4">            
            {INGREDIENTS_BUTTONS_DEF.map((text, index) => (
              <Button 
                key={index}
                type="secondaryBgTransparent"
                text={text}
                onBtnClick={() => {}}
                size="lg"                  
              />
            ))}
          </div> */}
          {product && (
            <div className="flex flex-col">
              <img className="w-44 self-center mb-4" src={imgUrl} alt="" />
              <ProductPortionCard 
                title="Lanche"
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
          )}
          <div className="mt-14 flex items-center gap-x-4 ml-12">
            <Button 
              text="Adicionar ao carrinho" 
              type="primary" 
              size="lg" 
              onBtnClick={handleAddToCartClick}
            />
            <Button text="Personalizar pedido" type="primary" size="lg" />
          </div>
          {/* <h3 className="font-bold text-lg mb-8 mt-20">Alergênicos</h3>
          <div className="flex flex-wrap items-center gap-4">            
            {INGREDIENTS_BUTTONS_DEF.map((text, index) => (
              <Button 
                key={index}
                type="secondaryBgTransparent"
                text={text}
                onBtnClick={() => {}}
                size="lg"                  
              />
            ))}
          </div> */}
        </div>        
      </section>

      <section className="container mx-auto mt-20">
        <div>
          <h2 className="font-bold text-4xl mb-24 text-center">Veja outras opções</h2>
          <div className="flex items-center justify-around">
            <CardNews />
            <CardNews />
            <CardNews />
          </div>
        </div>
      </section>
    </>
  );
}

export const Orientations = withSurfaces(OrientationsComponent);