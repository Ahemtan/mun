import React, { useEffect } from 'react'
import { useUserStore } from '../store/useUserStore';

const HomePage = () => {

  const { checkAuth, user, logout } = useUserStore();

  useEffect(() => {
      checkAuth();
  }, [])

  return (
    <div className='text-xl'>

      {
        user ? <button onClick={logout}>Logout</button> : "login now!"
      }

      <h1>Home</h1>
      
    </div>
  )
}

export default HomePage