import React, { useState } from 'react'
import Header from '../../components/header/Header'
import './Register.css'
import RegisterComponent from '../../components/registerComponent/RegisterComponent'
import HeroImage from '../../components/heroImage/HeroImage'
import Waves from '../../components/waves/Waves'
import HeaderSideMenu from '../../components/headerSideMenu/HeaderSideMenu'
import Notification from '../../components/notification/Notification'

const Register = () => {

  const [nofication, setNotification] = useState({message: '', title: '', icon: ''})

  const notifiyer = (obj) => {
    console.log(obj)
    setNotification({message: obj.message, title: obj.title, icon: obj.icon})
  }

  const closeNotification = () => {
    setNotification({message: '', title: '', icon: ''})
  }

  


  const [isMenu, setMenu] = useState(false)
  
    const handleMenu = () => {
      setMenu(!isMenu)
    }

  return (
    <div className='registerBackground'>
      <Header handleMenu={handleMenu} />
      <HeaderSideMenu handleMenu={handleMenu} isMenu={isMenu} />
      <section className='registerMainSection'>
        <div className='resgisterComponentDiv'>
          <RegisterComponent notifiyer={notifiyer}  />
        </div>
        <div className='resgisterHeroDiv'>
          <HeroImage />
        </div>
        <Waves />
        <Notification notification={nofication} onClose={closeNotification} />
      </section>
    </div>
  )
}

export default Register