// import React, { useEffect } from 'react'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Sidebar from '../../../components/app/sideBar/Sidebar'
import DashboardHeader from '../../../components/app/dashboardHeader/DashboardHeader'
import './ContactPage.css'
import ContactProfileCard from '../../../components/app/contactProfileCard/ContactProfileCard'
import { getContactByIdRequest } from '../../../Service/ApiService'


const ContactPage = () => {

    const {id} = useParams()
    const [contact, setContact] = useState({})

    const handleRequestToBackend = async () => {
        const resp = await getContactByIdRequest(id)
        console.log("O contato tem o id: "+id)
        console.log(resp)
        setContact(await resp.data[0])
    }
    useEffect(()=> {
        handleRequestToBackend()
    },[])

  return (
    <section>
        <Sidebar />
        <main className='contactPageMainSection'>
            <DashboardHeader />
            <ContactProfileCard contact={contact} />
        </main>
    </section>
  )
}

export default ContactPage