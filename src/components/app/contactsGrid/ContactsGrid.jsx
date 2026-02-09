import React from "react";
import "./ContactsGrid.css";

const ContactsGrid = ({ contacts }) => {
  if (!contacts && !contacts.length > 0) return;

  return (
    <div className="contactsPageGridContacts">
      {contacts && contacts.length > 0
        ? contacts.map((contact) => (
            <div className="favoriteContactsCard" key={contact.id}>
              <i
                className={`bi ${contact.favorite === true ? `bi-star-fill` : `bi-star`} favoriteContactsFavorited`}
              ></i>
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
                <button className="btn-card" title="Perfil">
                  <i className="bi bi-person"></i>
                </button>
                <button className="btn-card" title="Ligar">
                  <i className="bi bi-telephone-fill"></i>
                </button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ContactsGrid;
