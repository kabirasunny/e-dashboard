import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
