import 'react-toastify/dist/ReactToastify.css';
import { withSurfaces } from "../../hoc/withSurfaces";
import banner_food from "../../assets/images/banner_food.png";
import { Button } from "../../components/Button";
import { Main } from "../../components/partials/Main";
import { CardFood } from "../../components/CardFood";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../services/addCart";
import { ToastContainer, toast } from "react-toastify";

const BUTTONS_DEF_FOODS = [
  { text: "Todos", value: "all", categoryId: null },
  { text: "Lanches", value: "sandwiches", categoryId: 1 },
  { text: "Bebidas", value: "beverages", categoryId: 3 },
  { text: "Acompanhamentos", value: "desserts", categoryId: 2 },
];

const BebidaComponent = () => {
  const [sandwiches, setSandwiches] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryActive, setCategoryActive] = useState('beverages');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getProducts();
        const products = response;

        const sandwiches = products.filter(product => product.category.id === 1);
        const beverages = products.filter(product => product.category.id === 3);
        const desserts = products.filter(product => product.category.id === 2);

        setProducts(products);
        setSandwiches(sandwiches);
        setBeverages(beverages);
        setDesserts(desserts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    })();
  }, []);

  const handleAddToCartClick = async (id) => {
    try {
      await addCart(id, 1);
      toast.success('Produto adicionado ao carrinho!');
    } catch (err) {
      toast.error('Erro ao adicionar produto ao carrinho!');
    }
  };

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
                image={product.image}          
                title={product.name}                  
                price={product.price}
                onCardClick={() => { navigate(`/orientations/${product.id}`, { state: { imgUrl: "/src/assets/images/hamburguer.png" } }) }}
                onAddCardToCartClick={() => handleAddToCartClick(product.id)}
              />
            ))}
            {categoryActive === 'beverages' && beverages.map((product, index) => (
              <CardFood 
                key={index}
                image={product.image}                  
                title={product.name}                  
                price={product.price}
                onCardClick={() => { navigate(`/orientations/${product.id}`, { state: { imgUrl: "/src/assets/images/hamburguer.png" } }) }}
                onAddCardToCartClick={() => handleAddToCartClick(product.id)}
              />
            ))}
            {categoryActive === 'desserts' && desserts.map((product, index) => (
              <CardFood 
                key={index}
                image={product.image}                             
                price={product.price}
                title={product.name}
                onCardClick={() => { navigate(`/orientations/${product.id}`, { state: { imgUrl: "/src/assets/images/hamburguer.png" } }) }}
                onAddCardToCartClick={() => handleAddToCartClick(product.id)}
              />
            ))}
            {categoryActive === 'all' && products.map((product, index) => (
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

export const Bebida = withSurfaces(BebidaComponent);
