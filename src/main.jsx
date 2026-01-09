import React from 'react'
import ReactDOM from 'react-dom/client' // <--- O segredo tá aqui
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css' // Se tiver css global
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import NotFoundPage from './pages/notFound/NotFoundPage.jsx'
import Teste from './pages/Teste.jsx'
// Suas páginas

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