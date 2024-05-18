import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBook from './pages/CreateBook.jsx'
import DisplayBook from './pages/DisplayBook.jsx'
import EditBook from './pages/EditBook.jsx'
import DeleteBook from './pages/DeleteBook.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/books',
    element: <Home/>,
    children: [ 
      {
        path: '/books/display/:bookId',
        element: <DisplayBook />
      },
      {
        path: '/books/create',
        element: <CreateBook/>
      },
      {
        path: '/books/edit/:bookId',
        element: <EditBook/>
      },
      {
        path: '/books/delete/:bookId',
        element: <DeleteBook/>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
