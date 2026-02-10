import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/app/sideBar/Sidebar'
import DashboardHeader from '../../../components/app/dashboardHeader/DashboardHeader'
import './FavoriteContactsPage.css'
import ContactsGrid from '../../../components/app/contactsGrid/ContactsGrid'
import { favoriteContactsPageRequest } from '../../../Service/ApiService'
import NewContactModal from '../../../components/app/newContactModal/NewContactModal'

const FavoriteContactsPage = () => {
    const [contactsList, setContactsList] = useState([])
    const [isAddContact, setIsAddContact] = useState(false)

    const handleOpenOrCloseNewContactModal = () => {
        setIsAddContact(!isAddContact)
    }


    const handleRequestToBackend = async () =>{

        const jsonResponse = await favoriteContactsPageRequest()
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
            <DashboardHeader handleOpenOrCloseNewContactModal={handleOpenOrCloseNewContactModal}/>
            <ContactsGrid contacts={contactsList}/>
            {isAddContact? <NewContactModal handleOpenOrCloseNewContactModal={handleOpenOrCloseNewContactModal} handleRequestToBackend={handleRequestToBackend}/> : ""}
        </section>
    </section>
  )
}

export default FavoriteContactsPage