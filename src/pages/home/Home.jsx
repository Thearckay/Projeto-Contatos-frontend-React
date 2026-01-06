import React, { useState } from 'react'
import Header from '../../components/header/Header'

import './HomePage.css'
import Waves from '../../components/waves/Waves'
import HomeComponent from '../../components/homeComponent/HomeComponent'
import HeaderSideMenu from '../../components/headerSideMenu/HeaderSideMenu'


const Home = () => {

  const [isMenu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!isMenu)
  }


  return (
    <div className='homeBackground'>
      <Header handleMenu={handleMenu} />
      <HeaderSideMenu isMenu={isMenu} handleMenu={handleMenu} />
      <HomeComponent />
      <Waves />
    </div>
  )
}

export default Home