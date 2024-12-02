import React from 'react'
import { Toaster } from 'react-hot-toast'

import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AuthLayout from './components/layout/AuthLayout'
import RootLayout from './components/layout/RootLayout'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/" element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>

        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} /> 
        </Route>


        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        
      </Routes>

      <Toaster />
    
    </>
  )
}

export default App