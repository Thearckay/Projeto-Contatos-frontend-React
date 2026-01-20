import React from 'react'
import './FavoriteContacts.css'

const FavoriteContacts = () => {
  return (
    <section className='favoriteContacts'>
        <div className='favoriteContactsHeader'>
          <h3 className='favoriteContactsTitle'> 
            <i className="bi bi-star-fill"></i>
            Contatos Favoritos
          </h3>
          <button className='favoriteContactsSeeAllButton'>
            Ver todos <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className='favoriteContactsGrid'>
          <div className='favoriteContactsCard'>
            <i className="bi bi-star-fill favoriteContactsFavorited"></i>
            <img 
              src="https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg" 
              alt="Foto de perfil" 
              className='favoriteContactsCardPicture' 
            />
            <h2 className='favoriteContactsCardName'>Nome</h2>
            <p className='favoriteContactsCardOccupation'>Dev. Frontend</p>
            
            <div className='cardActions'>
              <button className='btn-card' title="Perfil">
                <i className="bi bi-person"></i>
              </button>
              <button className='btn-card' title="Ligar">
                <i className="bi bi-telephone-fill"></i>
              </button>
            </div>
          </div>
          
          <button className='favoriteContactsAddContact'>
            +
          </button>

        </div>
    </section>
  )
}

export default FavoriteContacts