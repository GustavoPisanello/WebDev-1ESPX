import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Sobre from './pages/Sobre.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx'
import Servicos from './pages/Servicos.jsx'
import Contato from './pages/Contato.jsx'
import Redirect from './pages/Redirect.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
    children: [
      {index: true, element: <ConteudoPrincipal/>},
      {path: "sobre", element: <Sobre/>},
      {path: "servicos", element: <Servicos/>},
      {path: "contato", element: <Contato/>},
      {path: "*", element: <Redirect/>}
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
