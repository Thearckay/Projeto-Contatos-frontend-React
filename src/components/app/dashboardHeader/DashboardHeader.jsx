import React from 'react'
import './DashboardHeader.css'

const DashboardHeader = ({ handleOpenOrCloseNewContactModal }) => {
  return (
    <div className='dashboardHeader'>
        <h1>Painel Geral</h1>
        <input type="text" className='dashboardHeaderSearchContacts' name="" id="" placeholder='Pesquisar contatos...' />
        <button className='dashboardHeaderBellButton'>
            <i className="bi bi-bell-fill"></i>
        </button>
        <button className='dashboardHeaderNewContactButton'onClick={handleOpenOrCloseNewContactModal}>
            <p>+</p>
            <p>Novo Contato</p>
        </button>
        <div className='dashboardHeaderDropDown'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ratione! Officiis, mollitia explicabo veritatis natus praesentium tempora assumenda enim architecto tempore iure earum maxime, fugit harum optio quasi cupiditate quo.
        </div>
    </div>
  )
}

export default DashboardHeader