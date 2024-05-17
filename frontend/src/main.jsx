import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import CreateBook from './components/CreateBook.jsx'
import Displaybook from './components/DisplayBook.jsx'
import Editbook from './components/EditBook.jsx'
import DeleteBook from './components/DeleteBook.jsx'
import DisplayBook from './components/DisplayBook.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/books',
    element: <Home/>
  },
  {
    path: '/books/create',
    element: <CreateBook/>
  },
  {
    path: '/books/display/:id',
    element: <DisplayBook/>
  },
  {
    path: '/books/edit/:id',
    element: <Editbook/>
  },
  {
    path: '/books/delete/:id',
    element: <DeleteBook/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
