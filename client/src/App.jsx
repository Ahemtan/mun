import { useEffect } from 'react'


import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from 'react-hot-toast'

import { useUserStore } from './store/useUserStore'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RootLayout from './components/layout/RootLayout'
import FormRegisterPage from './pages/FormRegisterPage'
import NotFound from './pages/NotFound'
import LoaderComponent from './components/loader'
import DashboardLayout from './components/layout/DashboardLayout'

const App = () => {

  const { checkingAuth, checkAuth, user } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  if(checkingAuth) return <LoaderComponent />

  return (
    <>
      <Routes>
        <Route path='/auth/login' element={user ? <Navigate to={'/'} /> : <LoginPage />} />
        <Route path='/auth/register' element={user ? <Navigate to={'/'} /> : <RegisterPage />} />



        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
          <Route path='register' element={user ? <FormRegisterPage /> : <Navigate to={'/auth/login'} />} />
        </Route>

        
        <Route path='/dashboard' element={<DashboardLayout />}>
        <Route index element={user?.role === 'ADMIN' ? <h1>Dashboard</h1> : <Navigate to={'/'} />} />
        </Route>

      </Routes>

      <Toaster />

    </>
  )
}

export default App