import { useEffect } from 'react';
import { useUserStore } from '../../store/useUserStore';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthLayout = () => {
    const navigate = useNavigate();
    const { checkAuth, user } = useUserStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return <Outlet />;
};

export default AuthLayout;
