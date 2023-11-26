import 'react-toastify/dist/ReactToastify.css';
import { withSurfaces } from "../../hoc/withSurfaces";
import banner_food from "../../assets/images/banner_food.png";
import { Button } from "../../components/Button";
import { BUTTONS_DEF_FOODS } from "./helpers";
import { Main } from "../../components/partials/Main";
import { CardFood } from "../../components/CardFood";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/addCart";
import { ToastContainer, toast } from "react-toastify";

const CardapioComponent = () => {
  const [products, setProducts] = useState([]);
  const [categoryActive, setCategoryActive] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response);
    })()
  }, [])

  const handleAddToCartClick = async (id) => {
    try {
      await addCart(id, 1);
      toast.success('Produto adicionado ao carrinho!');
    } catch (err) {
      toast.error('Erro ao adicionar produto ao carrinho!');
    }
  }

  const filteredProducts = categoryActive === 'all' ? products : products.filter(product => product.category.id === BUTTONS_DEF_FOODS.find(button => button.value === categoryActive).categoryId);

  return (
    <>
      <ToastContainer />
      <Main />

      <div className="container mx-auto flex justify-center">
        <img src={banner_food} alt="Banner food" />
      </div>

      <section className="container mx-auto mt-20">
        <div>
          <div className="flex items-center gap-x-4">
            {BUTTONS_DEF_FOODS.map((button, index) => (
              <Button 
                key={index}
                type="secondaryBgTransparent"
                text={button.text}
                onBtnClick={() => setCategoryActive(button.value)}
                size="lg"                  
              />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-x-4 mt-20">
            {filteredProducts.map((product, index) => (
              <CardFood 
                key={index}        
                image={product.image}          
                title={product.name}                  
                price={product.price}
                onCardClick={() => { navigate(`/orientations/${product.id}`, { state: { imgUrl: "/src/assets/images/hamburguer.png" } }) }}
                onAddCardToCartClick={() => handleAddToCartClick(product.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const Cardapio = withSurfaces(CardapioComponent);
