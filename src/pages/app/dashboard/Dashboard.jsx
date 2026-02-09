import React, { useEffect, useState } from 'react'
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
  const [totalContacts, setTotalContacts] = useState(0)
  const [totalFavoriteContacts, setTotalFavoriteContacts] = useState(0)
  const [totalNewContacts, setTotalNewContacts] = useState(0)
  const [userName, setUserName] = useState("User")
  const [favoriteContactList, setFavoriteContactList] = useState([])


  const handleOpenOrCloseNewContactModal = () => {
    console.log("CLicaoooooo")
    setIsAddContact(!isAddContact)
    handleSendRequestBackend()
  }

  const handleSendRequestBackend = ()=> {
    fetch("http://localhost:8080/app/dashboard", {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(resp => resp.json())
    .then(respData => {

      setTotalContacts(respData.data[0].totalContacts)
      setTotalFavoriteContacts(respData.data[0].totalFavorites)
      setTotalNewContacts(respData.data[0].newContactsThisMonth)
      const fullUserName = respData.data[0].userName.split(" ")
      setUserName(fullUserName[0]+" "+fullUserName[fullUserName.length -1])
      setFavoriteContactList(respData.data[0].favoritedContactList)
    
    })
  }

  useEffect(()=>{
    handleSendRequestBackend()
  }, [])

  return (
    <div className='dashboard' id='dashboard'>
      <Sidebar />
      <main className='dashboardMainSection'>
        <section className='dashboardSection'>
          <div className='dashboardHeaderDiv'>
            <DashboardHeader handleOpenOrCloseNewContactModal={handleOpenOrCloseNewContactModal} />
          </div>
          <div className='dashboardHelloUserDiv'>
            <h1>Olá, {userName}</h1>
            <p>Bem vindo, de volta! Sua agenda está sincronizada.</p>
          </div>
          <div className='dashboardContactsWidgetsDiv'>
            <ContactsWidgets totalContacts={totalContacts} totalFavorite={totalFavoriteContacts} newContacts={totalNewContacts} />
          </div>
          <div className='dashboardFavoriteContactsDiv'>
            <FavoriteContacts favoriteContactList={favoriteContactList} handleOpenOrCloseNewContactModal={handleOpenOrCloseNewContactModal} />
          </div>
          <div className='dashboardRecentActivitiesDiv'>
            <RecentActivities />
          </div>
          <div className='dashboardOrganizeWidgetsDiv'>
            <OrganizeContactsWidgets />
          </div>
        </section>
        {isAddContact? <NewContactModal handleOpenOrCloseNewContactModal={handleOpenOrCloseNewContactModal} handleRequestToBackend={handleSendRequestBackend}/> : ""}
        
      </main>
    </div>
  )
}

export default Dashboard
