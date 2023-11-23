import 'react-toastify/dist/ReactToastify.css';
import { withSurfaces } from "../../hoc/withSurfaces";
import banner_food from "../../assets/images/banner_food.png";
import { Button } from "../../components/Button";
import { BUTTONS_DEF_FOODS } from "./helpers";
import { CardNews } from "../../components/CardNews";
import { Main } from "../../components/partials/Main";
import { CardFood } from "../../components/CardFood";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/addCart";
import { ToastContainer, toast } from "react-toastify";

const HighlightsComponent = () => {
  //const [products, setProducts] = useState([]);  
  const [sandwiches, setSandwiches] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [categoryActive, setCategoryActive] = useState('sandwiches');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      const sandwiches = response.filter(product => product.category.id === 1);
      const beverages = response.filter(product => product.category.id === 2);
      const desserts = response.filter(product => product.category.id === 3);
      
      setSandwiches(sandwiches);
      setBeverages(beverages);
      setDesserts(desserts);      
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
              {categoryActive === 'sandwiches' && sandwiches.map((product, index) => (
                <CardFood 
                  key={index}                  
                  title={product.name}                  
                  price={product.price}
                  onCardClick={() => { navigate(`/orientations/${product.id}`, { state: { imgUrl: "/src/assets/images/hamburguer.png" } }) }}
                  onAddCardToCartClick={() => handleAddToCartClick(product.id)}
                />
              ))}
              {categoryActive === 'beverages' && beverages.map((product, index) => (
                <CardFood 
                  key={index}                  
                  title={product.name}                  
                  price={product.price}
                  onCardClick={() => { navigate(`/orientations/${product.id}`, { state: { imgUrl: "/src/assets/images/hamburguer.png" } }) }}
                  onAddCardToCartClick={() => handleAddToCartClick(product.id)}
                />
              ))}
              {categoryActive === 'desserts' && desserts.map((product, index) => (
                <CardFood 
                  key={index}                             
                  price={product.price}
                  title={product.name}
                  onCardClick={() => { navigate(`/orientations/${product.id}`, { state: { imgUrl: "/src/assets/images/hamburguer.png" } }) }}
                  onAddCardToCartClick={() => handleAddToCartClick(product.id)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-20">
          <div>
            <h2 className="font-bold text-4xl mb-24 text-center">Novidades da Devs Food</h2>
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

export const Highlights = withSurfaces(HighlightsComponent);