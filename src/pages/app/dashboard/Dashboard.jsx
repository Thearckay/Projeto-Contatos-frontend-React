import React, { useState } from 'react'
import './Dashboard.css'
import Sidebar from '../../../components/app/sideBar/Sidebar'
import DashboardHeader from '../../../components/app/dashboardHeader/DashboardHeader'
import ContactsWidgets from '../../../components/app/contactsWidgets/ContactsWidgets'
import FavoriteContacts from '../../../components/app/favoriteContacts/FavoriteContacts'
import RecentActivities from '../../../components/app/recentActivities/RecentActivities'
import OrganizeContactsWidgets from '../../../components/app/organizeContactsWidgets/OrganizeContactsWidgets'
import NewContactModal from '../../../components/app/newContactModal/NewContactModal'

const Dashboard = () => {

  const [isAddContact, setIsAddContact] = useState(false)

  const handleOpenOrCloseNewContactModal = () => {
    setIsAddContact(!isAddContact)
    console.log("Click")
  }

  return (
    <div className='dashboard'>
      <Sidebar />
      <main className='dashboardMainSection'>
        <section className='dashboardSection'>
          <div className='dashboardHeaderDiv'>
            <DashboardHeader handleOpenOrCloseNewContactModal={handleOpenOrCloseNewContactModal} />
          </div>
          <div className='dashboardHelloUserDiv'>
            <h1>Olá, Kayck Arcanjo</h1>
            <p>Bem vindo, de volta! Sua agenda está sincronizada.</p>
          </div>
          <div className='dashboardContactsWidgetsDiv'>
            <ContactsWidgets />
          </div>
          <div className='dashboardFavoriteContactsDiv'>
            <FavoriteContacts />
          </div>
          <div className='dashboardRecentActivitiesDiv'>
            <RecentActivities />
          </div>
          <div className='dashboardOrganizeWidgetsDiv'>
            <OrganizeContactsWidgets />
          </div>
        </section>
        {isAddContact? <NewContactModal handleOpenOrCloseNewContactModal={handleOpenOrCloseNewContactModal} /> : ""}
        
      </main>
    </div>
  )
}

export default Dashboard
