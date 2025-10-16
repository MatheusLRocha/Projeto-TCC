import { Menu, CircleUserRound, ArrowRightToLine, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faArrowRight, faBars, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import starFitnessLogo from '../img/starFitness-favicon.jpg';

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
        <Link to={'/inicio'} className="linkLogo">
          <img src={starFitnessLogo} alt="Logo Tcc StarFitness" className="logo-icon"/>
        </Link>
        <h1>{title}</h1>
        {iconH === "usuario" ? (
          <>
            <div className="icon">
                <Link to={'/'}><FontAwesomeIcon icon={faUser} /></Link>
            </div>
          </>
        ) : iconH === 'hamburguer' ? (
          <>
            <FontAwesomeIcon icon={faBars} id="menuIcon" className="icon" onClick={toggleMenu}/>

            <div className={`menu menu-${menuClass}`}>
                <div className="menu-title">
                    <FontAwesomeIcon icon={faArrowRight} className="menu-icon" onClick={toggleMenu}/>
                    <h1>Menu</h1>
                </div>
                <Link to={"/inicio"} className="link-item">Início</Link>
                <Link to={"/basal"} className="link-item">Calculadora Basal</Link>
                <Link to={"/imc"} className="link-item">Calculadora IMC</Link>
                <Link to={"/dieta"} className="link-item">Dieta</Link>
                <Link to={"/casa"} className="link-item">Exercícios em Casa</Link>
                <Link to={"/academia"} className="link-item">Exercícios na Academia</Link>
                <Link to={"/suplementos"} className="link-item">Suplementos</Link>
                <Link to={"/criadores"} className="link-item">Criadores</Link>    
              </div>
          </>

          
        ) : iconH === 'exit' ? (
          <FontAwesomeIcon className="icon" icon={faXmark} onClick={onClickToggle}/>
        ) : '' }
      </header>
    </>
  );
};

export default Header;
