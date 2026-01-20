import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'} className='logoDivBackground'>
      <p className='logoBackground'>A</p>
      <h1 className='logoName'>gendaPro</h1>
    </Link>
  )
}

export default Logo