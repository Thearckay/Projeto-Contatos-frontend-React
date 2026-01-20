import React from 'react'
import './DashboardHeader.css'

const DashboardHeader = () => {
  return (
    <div className='dashboardHeader'>
        <h1>Painel Geral</h1>
        <input type="text" className='dashboardHeaderSearchContacts' name="" id="" placeholder='Pesquisar contatos...' />
        <button className='dashboardHeaderBellButton'>
            <i class="bi bi-bell-fill"></i>
        </button>
        <button className='dashboardHeaderNewContactButton'>
            <p>+</p>
            <p>Novo Contato</p>
        </button>
    </div>
  )
}

export default DashboardHeader