import React, { useEffect } from 'react'
import { useUserStore } from '../../store/useUserStore';
import { Outlet, useNavigate } from "react-router-dom"
const AuthLayout = () => {

    const navigate = useNavigate();

    const { checkAuth, user } = useUserStore();


    useEffect(() => {
        checkAuth();
    }, [])

    if(user) {
        return navigate("/")
    }

    return (
        <Outlet />
    )
}

export default AuthLayout