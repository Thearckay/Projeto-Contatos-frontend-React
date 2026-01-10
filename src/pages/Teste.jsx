import React from 'react'
import './Teste.css'
import Notification from '../components/notification/Notification'

const Teste = () => {
  const obj = {
    message: "Olá, mundo!",
    title: "Titulo",
    icon: 'bi-exclamation-triangle-fill'
  }
  return (
    <div className='test'>
      <Notification notification={obj} onClose={obj}  />
    </div>
  )
}

export default Teste