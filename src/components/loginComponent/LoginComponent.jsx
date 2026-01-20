import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginComponent.css';

const LoginComponent = ({notifier}) => {

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    const response = await fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }
    )

    const result = await response.json()
    console.log("O handle do login foi ativado")

    if (result.status === 200){
      setTimeout(()=>{
        navigate('/app/dashboard')
      },2500)
    }

    notifier(result)
  }

  return (
    <div className="loginComponentCard">
      <Link to={'/'} end className='loginComponentCloseButton'><i className="bi bi-x-lg "></i></Link>
      <div className="loginComponentHeader">
        <h2>Bem-vindo de volta</h2>
        <p>Insira suas credenciais para acessar sua agenda.</p>
      </div>

      <form className="loginComponentForm" onSubmit={handleLogin} id='loginForm'>
        
        {/* Campo Email */}
        <div className="loginComponentInputGroup">
          <label htmlFor="email">Email</label>
          <div className="loginComponentInputWrapper">
            <i className="bi bi-envelope loginComponentInputIcon"></i>
            <input 
              className="loginComponentInput"
              type="email" 
              id="email" 
              name='email'
              placeholder="seu@email.com" 
            />
          </div>
        </div>

        {/* Campo Senha */}
        <div className="loginComponentInputGroup">
          <div className="loginComponentLabelRow">
            <label htmlFor="password">Senha</label>
            <Link to="/recuperar" className="loginComponentForgotLink">Esqueci minha senha</Link>
          </div>
          <div className="loginComponentInputWrapper">
            <i className="bi bi-lock loginComponentInputIcon"></i>
            <input 
              className="loginComponentInput"
              type="password" 
              id="password"
              name='password'
              placeholder="........" 
            />
          </div>
        </div>

        {/* Botão Entrar */}
        <button type="submit" className="loginComponentBtn">
          Entrar
        </button>

      </form>

      <div className="loginComponentFooter">
        <span>Ainda não tem uma conta? </span>
        <Link to="/register" className="loginComponentRegisterLink">Cadastre-se</Link>
      </div>
    </div>
  );
};

export default LoginComponent;