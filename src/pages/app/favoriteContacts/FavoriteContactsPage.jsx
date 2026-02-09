import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/app/sideBar/Sidebar'
import DashboardHeader from '../../../components/app/dashboardHeader/DashboardHeader'
import './FavoriteContactsPage.css'
import ContactsGrid from '../../../components/app/contactsGrid/ContactsGrid'

const FavoriteContactsPage = () => {
    const [contactsList, setContactsList] = useState([])

    const handleRequestToBackend = async () =>{
        const backendResponse = await fetch('http://localhost:8080/users/contacts/favorites', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        const jsonResponse = await backendResponse.json()
        console.log("Esse é o cara(s):")
        console.log(jsonResponse)

        if(jsonResponse && jsonResponse.data){
            setContactsList(jsonResponse.data[0].contactsList)
        }
    }

    useEffect(()=>{
        handleRequestToBackend()
    }, [])

  return (
    <section>
        <Sidebar />
        <section className='favoriteContactsMainContentBackground'>
            <DashboardHeader />
            <ContactsGrid contacts={contactsList}/>
        </section>
    </section>
  )
}

export default FavoriteContactsPage