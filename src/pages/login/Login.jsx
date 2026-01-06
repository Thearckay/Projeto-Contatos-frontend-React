import React from 'react'
import Logo from '../../components/logo/Logo'
import './Login.css'
import { Link } from 'react-router'
import HomeComponent from '../../components/homeComponent/HomeComponent'
import Waves from '../../components/waves/Waves'
import LoginComponent from '../../components/loginComponent/LoginComponent'


const Login = () => {
  return (
    <div className='loginBackground'>
      <header className='loginHeader'>
        <Logo />
        <div className='loginHeaderDivButton'>
          <p>Não tem uma conta?</p>
          <Link to={'/register'} className='loginHeaderRegisterButton'>Cadastra-se</Link>
        </div>
      </header>
      <section className='loginBlurSection'>
        <HomeComponent />
      </section>
      <Waves />
      <div className='loginComponentDiv'>
        <LoginComponent />
      </div>
      
    </div>
  )
}

export default Login