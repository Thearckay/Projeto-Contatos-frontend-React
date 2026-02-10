import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Sidebar from '../../../components/app/sideBar/Sidebar'
import DashboardHeader from '../../../components/app/dashboardHeader/DashboardHeader'
import ContactsWidgets from '../../../components/app/contactsWidgets/ContactsWidgets'
import FavoriteContacts from '../../../components/app/favoriteContacts/FavoriteContacts'
import RecentActivities from '../../../components/app/recentActivities/RecentActivities'
import OrganizeContactsWidgets from '../../../components/app/organizeContactsWidgets/OrganizeContactsWidgets'
import NewContactModal from '../../../components/app/newContactModal/NewContactModal'
import { useNavigate } from 'react-router'
import Notification from '../../../components/notification/Notification'
import { dashboardRequest } from '../../../Service/ApiService'

const Dashboard = () => {

  const [isAddContact, setIsAddContact] = useState(false)
  const [totalContacts, setTotalContacts] = useState(0)
  const [totalFavoriteContacts, setTotalFavoriteContacts] = useState(0)
  const [totalNewContacts, setTotalNewContacts] = useState(0)
  const [userName, setUserName] = useState("User")
  const [favoriteContactList, setFavoriteContactList] = useState([])
  const navigate = useNavigate()

  const [notification, setNotification] = useState({
    status: 0,
    message: '',
    data: {},
    erros: []
  })

  const notifier = (json) => {
    setNotification({
      status: json.status,
      message: json.message,
      data: json.data,
      erros: json.erros

    })
  }

  const closeNotification = () =>{
    setNotification({
      status: 0,
      message: '',
      data: {},
      erros: []
    })
  }


  const handleOpenOrCloseNewContactModal = () => {
    console.log("Request para o backend feito")
    setIsAddContact(!isAddContact)
    handleSendRequestBackend()
  }

  const handleSendRequestBackend = async ()=> {
    const respData = await dashboardRequest()
    if(respData.status === "401") {
        setTimeout(()=> {
          localStorage.removeItem("token")
          navigate('/login')
        }, 1900)
        notifier(respData)
        return;
      }

      localStorage.setItem("userName", respData.data[0].userName)
      localStorage.setItem("userEmail", respData.data[0].userEmail)
      setTotalContacts(respData.data[0].totalContacts)
      setTotalFavoriteContacts(respData.data[0].totalFavorites)
      setTotalNewContacts(respData.data[0].newContactsThisMonth)
      const fullUserName = respData.data[0].userName.split(" ")
      setUserName(fullUserName[0]+" "+fullUserName[fullUserName.length -1])
      setFavoriteContactList(respData.data[0].favoritedContactList)
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
        <Notification notification={notification} onClose={closeNotification} />
      </main>
    </div>
  )
}

export default Dashboard
