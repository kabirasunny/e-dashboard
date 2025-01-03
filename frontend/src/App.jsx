import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /></>
    },
    {
      path: "/signup",
      element: <><Navbar /><Signup /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
