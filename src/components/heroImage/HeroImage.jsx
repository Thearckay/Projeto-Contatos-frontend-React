import React from 'react';
import './HeroImage.css';
import meninaImg from '../../assets/images/homeImage.png'; 

const HeroImage = () => {
  return (
    <div className="hero-composition">
      
      <div className="bg-shape-blue"></div>
      <div className="bg-shape-gray"></div>

      <div className="image-wrapper">
        <img src={meninaImg} alt="Mulher sorrindo" />
      </div>

      <div className="card-float card-contacts">
        <div className="icon-circle gray">
          <i className="bi bi-pie-chart-fill"></i>
        </div>
        <span>Contatos</span>
        <h3>842</h3>
      </div>

      <div className="card-float card-novos">
        <div className="icon-circle dark">
          <i className="bi bi-briefcase-fill"></i>
        </div>
        <span>Novos</span>
        <h3>26</h3>
      </div>

      <div className="card-float card-taxa">
        <span>Taxa de Resposta</span>
        <div className="taxa-value">
          <h3>92%</h3>
          <span className="badge-arrow">↗ 5.2%</span>
        </div>
      </div>

      
      <div className="card-float card-equipe">
        <span>👥 Equipe Recente</span>
        <div className="avatars">
           <div className="avatar"></div>
           <div className="avatar"></div>
           <div className="avatar"></div>
        </div>
        <div className="interactions">
            <span>Interações <strong>128</strong></span>
        </div>
      </div>

    </div>
  );
};

export default HeroImage;