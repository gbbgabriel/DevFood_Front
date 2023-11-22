import { Link } from 'react-router-dom';
import hamburgerIcon from '../../../assets/images/icon_hamburguer_transparent.png';

export const Footer = () => {

  return (
    <footer className="bg-orange--primary h-[300px] flex p-8 mt-20">
      <div className="flex-1 flex flex-col justify-between items-center text-white">
        <div>
          <div className="flex items-center">
            <img src={hamburgerIcon} alt="Hamburguer logo" />
            <h3 className="ml-4 text-4xl">DEEV FOOD</h3>
          </div>
        </div>
        <div>
          <span className="block">2023 - Dev Food - Todos os direitos reservados</span>
          <span className="text-[12px]">As imagens expostas neste site são meramente ilustrativas</span>
        </div>
      </div>
      <div className="h-full bg-orange--primary w-1 border-l-2 border-dashed border-white"></div>
      <div className="flex-1 flex flex-col justify-center items-center text-white">
        <div>
          <h3 className="text-2xl mb-4">Mapa do Site</h3>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link to="/">Cardápio</Link>
            </li>
            <li>
              <Link to="/">Onde tem Devs</Link>
            </li>
            <li>
              <Link to="/">Novidades</Link>
            </li>
            <li>
              <Link to="/">Sobre nós</Link>
            </li>
          </ul>
        </div>        
      </div>
    </footer>
  );
}