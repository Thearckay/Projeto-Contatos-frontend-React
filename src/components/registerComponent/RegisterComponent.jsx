import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterComponent.css';

const RegisterComponent = ({ notifiyer }) => {

  const navigate = useNavigate()

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const isValidPhone = (phone) => {
    const numbers = phone.replace(/\D/g, '');
    return numbers.length >= 10;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    if (!data.fullName || data.fullName.trim().length < 3) {
      notifiyer({ message: 'Digite um nome completo válido.', title: 'Erro no Nome', type: 'error', icon: 'bi-person-x-fill' });
      return;
    }

    if (!isValidEmail(data.email)) {
      notifiyer({ message: 'O formato do e-mail está incorreto.', title: 'Erro no Email', type: 'error', icon: 'bi-envelope-x-fill' });
      return;
    }

    if (data.password.length < 6) {
        notifiyer({ message: 'A senha deve ter no mínimo 6 caracteres.', title: 'Senha Fraca', type: 'error', icon: 'bi-shield-lock-fill' });
        return;
    }

    if (data.password !== data.confirmPassword) {
      notifiyer({ message: 'As senhas não conferem.', title: 'Erro na Senha', type: 'error', icon: 'bi-key-fill' });
      return;
    }

    delete data.confirmPassword;

    if (!data.birthDate) {
      notifiyer({ message: 'Selecione sua data de nascimento.', title: 'Data Inválida', type: 'error', icon: 'bi-calendar-x-fill' });
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      notifiyer(result);

      if (response.ok) {
        setTimeout(() => {
          localStorage.setItem("token", result.data[0].token)
          navigate('/app/dashboard')
        }, 2000)
      } 
      
    } catch (error) {
      console.error(error);
      notifiyer({ message: "Não foi possível conectar ao servidor.", title: "Erro de Conexão", type: "error", icon: "bi-wifi-off" })
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
            <label className="registerComponentLabel" htmlFor="phone">Telefone</label>
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
            <label className="registerComponentLabel" htmlFor="birthdate">Nascimento</label>
            <div className="registerComponentInputWrapper">
              <i className="bi bi-cake2 registerComponentInputIcon"></i>
              <input 
                className="registerComponentInput"
                type="date"  
                name='birthDate'
                id="birthdate" 
                required
                style={{ color: '#555' }}
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
            <label className="registerComponentLabel" htmlFor="pass">Senha</label>
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
            <label className="registerComponentLabel" htmlFor="confirmPass">Confirmar</label>
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