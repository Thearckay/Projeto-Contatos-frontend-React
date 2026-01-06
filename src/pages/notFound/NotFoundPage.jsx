import React from 'react';
import { Link } from 'react-router-dom';
import Waves from '../../components/waves/Waves'; 
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="notFoundComponentContainer">

      <main className="notFoundComponentMain">
        <div className="notFoundComponentContent">
          <h1 className="notFoundComponentTitle">Ops! Página não encontrada.</h1>
          <h2 className="notFoundComponentSubtitle">Parece que você se perdeu nos contatos.</h2>
          <p className="notFoundComponentText">
            A página que você está procurando não existe ou foi movida.
            Que tal voltar para o início e tentar novamente?
          </p>
          
          <Link to="/" className="notFoundComponentBtn">
            <i className="bi bi-arrow-left"></i> Voltar para o Início
          </Link>
        </div>

        <div className="notFoundComponentImageWrapper">
          <div className="notFoundComponentPlaceholder">
            <span>404</span>
          </div>
        </div>
      </main>

      <Waves />
    </div>
  );
};

export default NotFoundPage;