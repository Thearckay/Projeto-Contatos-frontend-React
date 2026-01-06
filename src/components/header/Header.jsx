import React from 'react'
import Logo from '../logo/Logo'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = ({handleMenu}) => {

  return (
    <div className='headerBackground'>
      <Logo/>
      <ul className='headerMenuEl'>
        <li>
          <NavLink to="/" end className='headerButtons'>Início</NavLink>
        </li>
        <li>
          <NavLink to="/login" className='headerButtons'>Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" className='headerButtons'>Registrar-se</NavLink>
        </li>
      </ul>
      <button className='headerListButton' onClick={handleMenu}>
        <i className="bi bi-list headerListButton"></i>
      </button>
    </div>
  )
}

export default Header