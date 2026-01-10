import React, { useState } from 'react'
import Logo from '../../components/logo/Logo'
import './Login.css'
import { Link } from 'react-router'
import HomeComponent from '../../components/homeComponent/HomeComponent'
import Waves from '../../components/waves/Waves'
import LoginComponent from '../../components/loginComponent/LoginComponent'
import Notification from '../../components/notification/Notification'


const Login = () => {

  const [notification, setNotification] = useState({message: '', title: '', icon: ''})

  const notifier = (json) => {
    setNotification({message: json.message, title: json.title, icon: json.icon})
    console.log("O objeto subiu! "+json)
  }

  const closeNotification = () =>{
    setNotification({message:'', title:'', icon:''})
  }

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
        <LoginComponent notifier={notifier} />
      </div>
      <Notification notification={notification} onClose={closeNotification}/>
    </div>
  )
}

export default Login