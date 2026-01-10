import { useEffect, useState } from 'react'
import './Notification.css'

const Notification = ({notification, onClose}) => {

  const [showClass, setShowClass] = useState(false)

  useEffect(() =>{
    if (!notification && !notification.message) return 

    setShowClass(true)

    const timer = setTimeout(() =>{
      setShowClass(false)

      setTimeout(()=>{
        if(onClose) onClose()
      }, 500)
    }, 3000)

   return () => clearTimeout(timer)
    
  },[notification, onClose, setShowClass])

  if( !notification || !notification.message ) return null

  return (
    <div className={`notification ${showClass? 'notificationOn' : 'notificationOff'}`}>
        <i className={`bi ${notification.icon} notificationIcon`}></i>
        <div className='notificationMessageDiv'>
            <h1 className='notificationTitle'>{notification.title}</h1>
            <p>{notification.message}</p>
        </div>
    </div>
  )
}

export default Notification