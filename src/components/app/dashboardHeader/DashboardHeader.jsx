import React, { useState } from 'react'
import './DashboardHeader.css'
import { headerDashboardRequestQuery } from '../../../Service/ApiService'

const DashboardHeader = ({ handleOpenOrCloseNewContactModal }) => {

  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(true)
  const [respJson, setRespJson] = useState({})

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  )

  const  handleRequestToBackend = async () => {
    setTimeout(async ()=> {
      setRespJson(await headerDashboardRequestQuery(search))
    },500)

    console.log(await respJson)
  }

  return (
    <div className='dashboardHeader'>
      <h1>Painel Geral</h1>

      <div className='dashboardHeaderInputWrapper'>
        <input
          type="text"
          className='dashboardHeaderSearchContacts'
          placeholder='Pesquisar contatos...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setOpen(true)
            handleRequestToBackend()
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
        />

        {open && search && (
          <div className='dashboardHeaderDropDown'>
            {filteredContacts.length === 0 && (
              <p className="dropdownEmpty">Nenhum contato encontrado</p>
            )}

            {filteredContacts.map(contact => (
              <div key={contact.id} className="dropdownItem">
                {contact.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <button className='dashboardHeaderBellButton'>
        <i className="bi bi-bell-fill"></i>
      </button>

      <button
        className='dashboardHeaderNewContactButton'
        onClick={handleOpenOrCloseNewContactModal}
      >
        <p>+</p>
        <p>Novo Contato</p>
      </button>
    </div>
  )
}

export default DashboardHeader
