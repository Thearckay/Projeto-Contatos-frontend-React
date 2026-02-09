import React, { useEffect, useState } from "react";
import "./ContactsPage.css";
import Sidebar from "../../../components/app/sideBar/Sidebar";
import DashboardHeader from "../../../components/app/dashboardHeader/DashboardHeader";
import ContactsGrid from "../../../components/app/contactsGrid/ContactsGrid";

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
        <ContactsGrid contacts={contacts}/>
      </main>
    </section>
  );
};

export default ContactsPage;
