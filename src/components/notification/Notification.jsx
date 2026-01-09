
import './Notification.css'

const Notification = ({title, message}) => {

  if( message == '') return

 
  return (
    <div className={`notification notificationOn`}>
        <i className="bi bi-check-circle-fill notificationIcon"></i>
        <div className='notificationMessageDiv'>
            <h1 className='notificationTitle'>{title}</h1>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Notification