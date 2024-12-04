import { useEffect, useState } from 'react';
import { useUserStore } from '../../store/useUserStore';
import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const RegisterLayout = () => {
    const { checkAuth, user, loading } = useUserStore();
    const [authChecked, setAuthChecked] = useState(false); // Track whether auth check is complete

    useEffect(() => {
        const verifyAuth = async () => {
            await checkAuth(); // Wait for the auth check to complete
            if (!user) {
                window.location.replace('/auth/login');
            } else {
                setAuthChecked(true); // Allow rendering once the user is verified
            }
        };
        verifyAuth();
    }, [checkAuth, user]);

    if (!authChecked || loading) {
        return <div className='w-screen h-screen flex justify-center items-center'> <h1 className='text-3xl'>Loading...</h1></div>;
    }

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RegisterLayout;
