import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import CadUsuarios from './routes/CadUsuarios.jsx'
import ListarUsuarios from './routes/ListarUsuarios.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import CadProdutos from './routes/CadProdutos.jsx'
import ListarProdutos from './routes/ListarProdutos.jsx'


//criando a função 
const router =createBrowserRouter([
  {
    //Elementos Pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elemento Filho
    children:[
     {path:'/',element:<Home/>},
     {path:'/login', element:<Login/>},
     {path:'/sobre', element:<Sobre/>},
     {path:'/produtos', element:<Produtos/>},
     {path:'/cadUsuarios',element:<CadUsuarios/>},
     {path:'/cadprodutos',element:<CadProdutos/>},
     {path:'/listarUsuarios',element:<ListarUsuarios/>},
     {path:'/listarProdutos',element:<ListarProdutos/>},

     //editarUsuario NÃO PODE ESQUECER DE :id ( para editar e excluir)
     {path:'/editarUsuarios/:id', element:<CadUsuarios/>},
    ]
  
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
