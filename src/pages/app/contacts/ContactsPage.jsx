import React, { useEffect, useState } from "react";
import "./ContactsPage.css";
import Sidebar from "../../../components/app/sideBar/Sidebar";
import DashboardHeader from "../../../components/app/dashboardHeader/DashboardHeader";
import ContactsGrid from "../../../components/app/contactsGrid/ContactsGrid";
import { contactsPageRequest } from "../../../Service/ApiService";
import NewContactModal from "../../../components/app/newContactModal/NewContactModal";


const ContactsPage = () => {
  
  const [contacts, setContacts] = useState([]);
  const [isAddContact, setIsAddContact] = useState(false)

  const handleOpenOrCloseNewContactModal = () =>{
    setIsAddContact(!isAddContact)
  }

  const handleRequestToBackend = async () => {
    const respJson = await contactsPageRequest()
    if (respJson && respJson.data) {
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
        <DashboardHeader handleOpenOrCloseNewContactModal={handleOpenOrCloseNewContactModal} />
        <ContactsGrid contacts={contacts}/>
      </main>
      {isAddContact? <NewContactModal handleOpenOrCloseNewContactModal={handleOpenOrCloseNewContactModal} handleRequestToBackend={handleRequestToBackend} /> : ''}
    </section>
  );
};

export default ContactsPage;
