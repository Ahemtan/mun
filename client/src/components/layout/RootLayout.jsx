import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    
    <Navbar />

    <main>
        <Outlet />
    </main>

    <Footer />

    </>
  )
}

export default RootLayout