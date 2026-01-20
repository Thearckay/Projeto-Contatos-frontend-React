import React from 'react'
import './HomeComponent.css'
import { Link } from 'react-router-dom'
import HeroImage from '../heroImage/HeroImage'

const HomeComponent = () => {
  return (
    <div className='homeHeroDiv'>
        <div className='homeHeroDivLeft'>
          <h1 className='homeHeroTitle'>Organize seus contatos com facilidade </h1>
          <p className='homeHeroSubTitle'>O AgendaPro cria o sistema perfeito para suas conexões, economizando até 40% do seu tempo de gestão semanal.</p>
          <div className='homeDivButtons'>
            <Link to={'/register'} className='homeRegisterButton'>Cadastrar</Link>
            <Link to={'/login'} className='homeLoginButton'>Entrar</Link>
          </div>
        </div>
        <HeroImage />
    </div>
  )
}

export default HomeComponent