import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Welcome">
      <div className="TextGeneral">
        <h1 className="TextIntro">Empieza tu compra en Dillons</h1>
        <p className="ParagraphWell">Dillons tu supermercado de confianza donde encontras de todo y si no tenemos lo que busca, es por que no exite.</p>
        <div className="Postal">
          <Link to="card"> 
          <button className="button2" >Entrar</button>
          </Link>
          
        </div>
      </div>
      
      
      <div className="wave">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" ></path>
        </svg>
      </div>
    </div >
  );
}

export default Header;