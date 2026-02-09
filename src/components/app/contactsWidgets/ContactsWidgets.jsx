import React from 'react'
import './ContactsWidgets.css'

const ContactsWidgets = ({totalContacts, totalFavorite, newContacts}) => {

  return (
    <div className='contactsWidgets'>
        <div className='contactsWidgetsCard'>
            <i className="bi bi-people-fill contactsWidgetsCardIcon"></i>
            <div className='contactsWidgetsCardDiv'>
                <h1 className='contactsWidgetsCardTitle'>Total de Contatos</h1>
                <span className='contactsWidgetsCardNumber'>{totalContacts == null? 0 : totalContacts }</span>
            </div>
        </div>
        <div className='contactsWidgetsCard'>
            <i className="bi bi-star-fill contactsWidgetsCardIcon contactsWidgetFavoriteIcon"></i>
            <div className='contactsWidgetsCardDiv'>
                <h1 className='contactsWidgetsCardTitle'>Favoritos</h1>
                <span className='contactsWidgetsCardNumber'>{totalFavorite == null? 0 : totalFavorite}</span>
            </div>
        </div>
        <div className='contactsWidgetsCard'>
            <i className="bi bi-graph-up-arrow contactsWidgetsCardIcon contactsWidgetNewContacts"></i>
            <div className='contactsWidgetsCardDiv'>
                <h1 className='contactsWidgetsCardTitle'>Novos este mês</h1>
                <span className='contactsWidgetsCardNumber'>{newContacts == null? 0 : newContacts}</span>
            </div>
        </div>
       
    </div>
  )
}

export default ContactsWidgets