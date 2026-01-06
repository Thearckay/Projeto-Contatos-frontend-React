import React, { useState } from 'react'
import Header from '../../components/header/Header'
import './Register.css'
import RegisterComponent from '../../components/registerComponent/RegisterComponent'
import HeroImage from '../../components/heroImage/HeroImage'
import Waves from '../../components/waves/Waves'
import HeaderSideMenu from '../../components/headerSideMenu/HeaderSideMenu'

const Register = () => {

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
          <RegisterComponent />
        </div>
        <div className='resgisterHeroDiv'>
          <HeroImage />
        </div>
        <Waves />
      </section>
    </div>
  )
}

export default Register