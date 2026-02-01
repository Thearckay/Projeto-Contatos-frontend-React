import React from 'react'
import './OrganizeContactsWidgets.css'

const OrganizeContactsWidgets = () => {
  return (
    <div className='organizeContactsWidgets'>
        <span className="material-symbols-outlined organizeContactsWidgetIcon">folder_shared</span>
        <h3>Organize seus contatos</h3>
        <p>Crie grupos especificos para otimizar sua produtividade.</p>
        <button className='organizeContactsWidgetButton'>Gerenciar Grupos</button>
    </div>
  )
}

export default OrganizeContactsWidgets