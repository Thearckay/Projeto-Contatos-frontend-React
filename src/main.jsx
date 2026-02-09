import React from 'react'
import ReactDOM from 'react-dom/client' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css' 
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import NotFoundPage from './pages/notFound/NotFoundPage.jsx'
import Teste from './pages/Teste.jsx'
import Dashboard from './pages/app/dashboard/Dashboard.jsx'
import ContactsPage from './pages/app/contacts/ContactsPage.jsx'
import FavoriteContactsPage from './pages/app/favoriteContacts/FavoriteContactsPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
  {
    path: '/app/dashboard',
    element: <Dashboard />
  },
  {
    path: '/app/contacts',
    element: <ContactsPage />
  },
  {
    path: 'app/contacts/favorites',
    element: <FavoriteContactsPage />
  },
  {
    path: 'test',
    element: <Teste />
  }
])

// A renderização
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)