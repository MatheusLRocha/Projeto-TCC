import { Menu, CircleUserRound, ArrowRightToLine, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = ({ title, iconH, onClickToggle }) => {
  const [menuClass, setMenuClass] = useState('disabled');
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    if (!menuActive) {
      setMenuActive(!menuActive);
      setMenuClass('active')
    } else {
      setMenuActive(!menuActive);
      setMenuClass('disabled');
    }
  }

  return (
    <>
      <header>
        <h1>{title}</h1>
        {iconH === "usuario" ? (
          <>
            <div className="icon">
                <Link to={'/'}><CircleUserRound size={32} color="#124580"/></Link>
                <h3>User</h3>
            </div>
          </>
        ) : iconH === 'hamburguer' ? (
          <>
            <Menu className="icon" id="menuIcon" size={32} onClick={toggleMenu}/>

            <div className={`menu menu-${menuClass}`}>
                <div className="menu-title">
                    <ArrowRightToLine size={48} className="menu-icon" onClick={toggleMenu}/>
                    <h1>Menu</h1>
                </div>
                <div className="link-item">
                    <Link to={"/inicio"}>Início</Link>
                </div>
                <div className="link-item">
                    <Link to={"/basal"}>Calculadora Basal</Link>
                </div>
                <div className="link-item">
                    <Link to={"/imc"}>Calculadora IMC</Link>
                </div>
                <div className="link-item">
                    <Link to={"/dieta"}>Dieta</Link>
                </div>
                <div className="link-item">
                    <Link to={"/casa"}>Exercícios em Casa</Link>
                </div>
                <div className="link-item">
                    <Link to={"/academia"}>Exercícios na Academia</Link>
                </div>
                <div className="link-item">
                    <Link to={"/suplementos"}>Suplementos</Link>
                </div>
                <div className="link-item">
                    <Link to={"/criadores"}>Criadores</Link>    
                </div>   
              </div>
          </>

          
        ) : iconH === 'exit' ? (
          <X className="icon" size={32} onClick={onClickToggle}/>
        ) : '' }
      </header>
    </>
  );
};

export default Header;
