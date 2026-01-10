import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterComponent.css';
import Notification from '../notification/Notification';

const RegisterComponent = ({notifiyer}) => {

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    if (data.password !== data.confirmPassword) {
      notifiyer({message: 'As senhas não conferem', title: 'Erro'})
      return;
    }

    delete data.confirmPassword;

    try {
      const response = await fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      notifiyer(result)
      if (response.ok) {

        console.log(result)

        setTimeout(()=>{
          navigate('/login')
        }, 4000)

      } 
      
    } catch (error) {
      console.error("Erro na requisição:", error);
      //alert("Erro ao conectar com o servidor.");
      notifiyer({message: "Erro ao conectar com o servidor", title: "Erro", icon: "bi-exclamation-triangle-fill"})
    }

  }

  return (
    <div className="registerComponentCard">
      
      <div className="registerComponentHeader">
        <h2>Crie sua conta</h2>
        <p>Comece a organizar seus contatos hoje mesmo.</p>
      </div>

      <form className="registerComponentForm" onSubmit={handleSubmit}>
        
        <div className="registerComponentInputGroup">
          <label className="registerComponentLabel" htmlFor="name">Nome Completo</label>
          <div className="registerComponentInputWrapper">
            <i className="bi bi-person registerComponentInputIcon"></i>
            <input 
              className="registerComponentInput"
              type="text" 
              name='fullName'
              id="fullName" 
              placeholder="Ex: João Silva" 
            />
          </div>
        </div>

        <div className="registerComponentInputGroup">
          <label className="registerComponentLabel" htmlFor="email">Email</label>
          <div className="registerComponentInputWrapper">
            <i className="bi bi-envelope registerComponentInputIcon"></i>
            <input 
              className="registerComponentInput"
              type="email"
              name='email' 
              id="email" 
              placeholder="seu@email.com" 
            />
          </div>
        </div>

        <div className="registerComponentRow">
          <div className="registerComponentInputGroup">
            <label className="registerComponentLabel" htmlFor="phone">Número de Telefone</label>
            <div className="registerComponentInputWrapper">
              <i className="bi bi-telephone registerComponentInputIcon"></i>
              <input 
                className="registerComponentInput"
                type="tel"
                name='phoneNumber'
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
                type="text" 
                name='birthDate'
                onFocus={(e) => e.target.type = 'date'} 
                onBlur={(e) => e.target.type = 'text'}
                id="birthdate" 
                placeholder="mm/dd/yyyy" 
              />
            </div>
          </div>
        </div>

        <div className="registerComponentInputGroup">
          <label className="registerComponentLabel" htmlFor="job">Profissão</label>
          <div className="registerComponentInputWrapper">
            <i className="bi bi-briefcase registerComponentInputIcon"></i>
            <input 
              className="registerComponentInput"
              type="text" 
              name='occupation'
              id="job" 
              placeholder="Ex: Desenvolvedor" 
            />
          </div>
        </div>

        <div className="registerComponentRow">
          <div className="registerComponentInputGroup">
            <label className="registerComponentLabel" htmlFor="pass">Criar Senha</label>
            <div className="registerComponentInputWrapper">
              <i className="bi bi-lock registerComponentInputIcon"></i>
              <input 
                className="registerComponentInput"
                name='password'
                type="password" 
                id="pass" 
                placeholder="........" 
              />
            </div>
          </div>

          <div className="registerComponentInputGroup">
            <label className="registerComponentLabel" htmlFor="confirmPass">Confirmar Senha</label>
            <div className="registerComponentInputWrapper">
              <i className="bi bi-arrow-repeat registerComponentInputIcon"></i>
              <input 
                className="registerComponentInput"
                type="password" 
                name='confirmPassword'
                id="confirmPass" 
                placeholder="........" 
              />
            </div>
          </div>
        </div>

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
}

export default RegisterComponent;