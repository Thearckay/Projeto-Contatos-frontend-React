import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterComponent.css';

const RegisterComponent = () => {
  return (
    <div className="registerComponentCard">
      
      <div className="registerComponentHeader">
        <h2>Crie sua conta</h2>
        <p>Comece a organizar seus contatos hoje mesmo.</p>
      </div>

      <form className="registerComponentForm">
        
        {/* Nome Completo */}
        <div className="registerComponentInputGroup">
          <label className="registerComponentLabel" htmlFor="name">Nome Completo</label>
          <div className="registerComponentInputWrapper">
            <i className="bi bi-person registerComponentInputIcon"></i>
            <input 
              className="registerComponentInput"
              type="text" 
              id="name" 
              placeholder="Ex: João Silva" 
            />
          </div>
        </div>

        {/* Email */}
        <div className="registerComponentInputGroup">
          <label className="registerComponentLabel" htmlFor="email">Email</label>
          <div className="registerComponentInputWrapper">
            <i className="bi bi-envelope registerComponentInputIcon"></i>
            <input 
              className="registerComponentInput"
              type="email" 
              id="email" 
              placeholder="seu@email.com" 
            />
          </div>
        </div>

        {/* LINHA DUPLA: Telefone e Data */}
        <div className="registerComponentRow">
          <div className="registerComponentInputGroup">
            <label className="registerComponentLabel" htmlFor="phone">Número de Telefone</label>
            <div className="registerComponentInputWrapper">
              <i className="bi bi-telephone registerComponentInputIcon"></i>
              <input 
                className="registerComponentInput"
                type="tel" 
                id="phone" 
                placeholder="(11) 99999-9999" 
              />
            </div>
          </div>

          <div className="registerComponentInputGroup">
            <label className="registerComponentLabel" htmlFor="birthdate">Data de Aniversário</label>
            <div className="registerComponentInputWrapper">
              <i className="bi bi-cake2 registerComponentInputIcon"></i>
              <input 
                className="registerComponentInput"
                type="text" // Usei text pra simular o placeholder, ou use type="date"
                onFocus={(e) => e.target.type = 'date'} // Truque pra mostrar placeholder
                onBlur={(e) => e.target.type = 'text'}
                id="birthdate" 
                placeholder="mm/dd/yyyy" 
              />
            </div>
          </div>
        </div>

        {/* Profissão */}
        <div className="registerComponentInputGroup">
          <label className="registerComponentLabel" htmlFor="job">Profissão</label>
          <div className="registerComponentInputWrapper">
            <i className="bi bi-briefcase registerComponentInputIcon"></i>
            <input 
              className="registerComponentInput"
              type="text" 
              id="job" 
              placeholder="Ex: Desenvolvedor" 
            />
          </div>
        </div>

        {/* LINHA DUPLA: Senhas */}
        <div className="registerComponentRow">
          <div className="registerComponentInputGroup">
            <label className="registerComponentLabel" htmlFor="pass">Criar Senha</label>
            <div className="registerComponentInputWrapper">
              <i className="bi bi-lock registerComponentInputIcon"></i>
              <input 
                className="registerComponentInput"
                type="password" 
                id="pass" 
                placeholder="........" 
              />
            </div>
          </div>

          <div className="registerComponentInputGroup">
            <label className="registerComponentLabel" htmlFor="confirmPass">Confirmar Senha</label>
            <div className="registerComponentInputWrapper">
              {/* Ícone de 'refresh' ou 'check' conforme a imagem */}
              <i className="bi bi-arrow-repeat registerComponentInputIcon"></i>
              <input 
                className="registerComponentInput"
                type="password" 
                id="confirmPass" 
                placeholder="........" 
              />
            </div>
          </div>
        </div>

        {/* Botão Cadastrar */}
        <button type="submit" className="registerComponentBtn">
          Cadastrar <i className="bi bi-arrow-right"></i>
        </button>

      </form>

      <div className="registerComponentFooter">
        <Link to="/login" className="registerComponentLink">
           <i className="bi bi-arrow-left"></i> Já tenho uma conta
        </Link>
      </div>

    </div>
  );
};

export default RegisterComponent;