import React, { useEffect, useState } from "react";
import "./ContactsPage.css";
import Sidebar from "../../../components/app/sideBar/Sidebar";
import DashboardHeader from "../../../components/app/dashboardHeader/DashboardHeader";

const ContactsPage = () => {
  
  const [contacts, setContacts] = useState([]);

  const handleRequestToBackend = async () => {
    const backendResponse = await fetch(
      "http://localhost:8080/users/contacts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    const respJson = await backendResponse.json();
    console.log("Os contatos:");
    console.log(respJson);

    if (respJson && respJson.data) {
      console.log("Os dados foram setados")
      setContacts(respJson.data[0].contactsList)
    }

  };



  useEffect(() => {
    handleRequestToBackend()
  }, []);

  return (
    <section>
      <Sidebar />
      <main className="contactsPageMainContent">
        <DashboardHeader />
        <div className="contactsPageGridContacts">
          {contacts && contacts.length > 0 ? (contacts.map(contact => (
            <div className="favoriteContactsCard" key={contact.id}>
            <i className={`bi ${contact.favorite === true ? `bi-star-fill` : `bi-star`} favoriteContactsFavorited`}></i>
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
          ))): ""}
        </div>
      </main>
    </section>
  );
};

export default ContactsPage;
