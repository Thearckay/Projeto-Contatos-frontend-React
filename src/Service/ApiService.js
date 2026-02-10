const API_BASE_URL = `http://localhost:8080`

// Dashboard
async function dashboardRequest(){
    const dashboardRequest = await fetch(`${API_BASE_URL}/app/dashboard`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })

    console.log("O Service API foi chamado")
    const resp = await dashboardRequest.json()
    return resp
}

// DashboardHeader 
async function headerDashboardRequestQuery(query) {
    const headerDashboardResponse = await fetch(`${API_BASE_URL}/users/contacts/search?q=${query}`,{
        method: 'GET',
        headers:{
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })

    const resp = await headerDashboardResponse.json()
    console.log(await resp)
    return resp;
}

// Modal de novos contatos do dashboard
async function newContactModalRequest(dataForm) {
    const newContatcRequest = await fetch(`${API_BASE_URL}/users/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body:  JSON.stringify(dataForm)
    })

    console.log("O novo contato foi enviado")
    console.log(JSON.stringify(dataForm))
    const resp = await newContatcRequest.json()
    return resp;
}

// página de contatos
async function contactsPageRequest() {
    const contactsRequest = await fetch(`${API_BASE_URL}/users/contacts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    console.log("Chamando a página de contatos")
    const resp = await contactsRequest.json()
    return resp;
}

// página de contatos favoritos
async function favoriteContactsPageRequest() {
    const favoriteContacsRequest = await fetch(`${API_BASE_URL}/users/contacts/favorites`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    console.log("Contatos favoritos requisitados")
    const resp = await favoriteContacsRequest.json()
    return resp;
}

export{ 
    dashboardRequest,
    headerDashboardRequestQuery,
    newContactModalRequest,
    contactsPageRequest,
    favoriteContactsPageRequest
}