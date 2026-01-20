import React from 'react'
import './Dashboard.css'
import Sidebar from '../../../components/app/sideBar/Sidebar'
import DashboardHeader from '../../../components/app/dashboardHeader/DashboardHeader'
import ContactsWidgets from '../../../components/app/contactsWidgets/ContactsWidgets'
import FavoriteContacts from '../../../components/app/favoriteContacts/FavoriteContacts'
import RecentActivities from '../../../components/app/recentActivities/RecentActivities'


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <main className='dashboardMainSection'>
        <section className='dashboardSection'>
          <DashboardHeader />
          <div className='dashboardHelloUserDiv'>
            <h1>Olá, Kayck Arcanjo</h1>
            <p>Bem vindo, de volta! Sua agenda está sincronizada.</p>
          </div>
          <ContactsWidgets />
          <FavoriteContacts />
          <RecentActivities />
        </section>
      </main>
    </div>
  )
}

export default Dashboard
