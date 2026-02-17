import { useNavigate } from "react-router";
import "./FavoriteContacts.css";

const FavoriteContacts = ({ favoriteContactList, handleOpenOrCloseNewContactModal }) => {

  const navigate = useNavigate()
  const handleSelectedContact = (id) => {
    console.log("O contato tem o id: "+id)
    navigate(`/app/contact/${id}`)
  }

  return (
    <section className="favoriteContacts">
      <div className="favoriteContactsHeader">
        <h3 className="favoriteContactsTitle">
          <i className="bi bi-star-fill"></i>
          Contatos Favoritos
        </h3>
        <button className="favoriteContactsSeeAllButton" onClick={()=> navigate('/app/contacts/favorites')}>
          Ver todos <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      <div className="favoriteContactsGrid">
        {favoriteContactList && favoriteContactList.length > 0 ? (
          favoriteContactList.map((contact) => (
            <div className="favoriteContactCardButton"  key={contact.id} onClick={() => handleSelectedContact(contact.id)}>
              <div className="favoriteContactsCard"> 
                <i className="bi bi-star-fill favoriteContactsFavorited"></i>
                <img
                  src="https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg"
                  alt={`Foto de ${contact.fullName}`}
                  className="favoriteContactsCardPicture"
                />
                <h2 className="favoriteContactsCardName">{contact.fullName}</h2>
                <p className="favoriteContactsCardOccupation">
                  {contact.occupation || "Sem ocupação"}
                </p>

                <div className="cardActions">
                  <button className="btn-card" title="Perfil" onClick={(e)=> e.stopPropagation()}>
                    <i className="bi bi-person"></i>
                  </button>
                  <button className="btn-card" title="Ligar">
                    <i className="bi bi-telephone-fill"></i>
                  </button>
                </div>
              </div>

            </div>
          ))
        ) : ""// (<p className="noContactsMessage">Nenhum favorito encontrado.</p>)
        }

        <button className="favoriteContactsAddContact" onClick={handleOpenOrCloseNewContactModal}>+</button>
      </div>
    </section>
  );
};

export default FavoriteContacts;