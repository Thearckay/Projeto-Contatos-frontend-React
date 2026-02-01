import React from 'react'
import './ContactsWidgets.css'

const ContactsWidgets = () => {
  return (
    <div className='contactsWidgets'>
        <div className='contactsWidgetsCard'>
            <i className="bi bi-people-fill contactsWidgetsCardIcon"></i>
            <div className='contactsWidgetsCardDiv'>
                <h1 className='contactsWidgetsCardTitle'>Total de Contatos</h1>
                <span className='contactsWidgetsCardNumber'>0</span>
            </div>
        </div>
        <div className='contactsWidgetsCard'>
            <i className="bi bi-star-fill contactsWidgetsCardIcon contactsWidgetFavoriteIcon"></i>
            <div className='contactsWidgetsCardDiv'>
                <h1 className='contactsWidgetsCardTitle'>Favoritos</h1>
                <span className='contactsWidgetsCardNumber'>0</span>
            </div>
        </div>
        <div className='contactsWidgetsCard'>
            <i className="bi bi-graph-up-arrow contactsWidgetsCardIcon contactsWidgetNewContacts"></i>
            <div className='contactsWidgetsCardDiv'>
                <h1 className='contactsWidgetsCardTitle'>Novos este mês</h1>
                <span className='contactsWidgetsCardNumber'>0</span>
            </div>
        </div>
       
    </div>
  )
}

export default ContactsWidgets