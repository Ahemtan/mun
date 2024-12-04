import { useUserStore } from '../store/useUserStore';
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserAuth = () => {


    const { user, logout } = useUserStore();

    return (
        <div className="sm:flex sm:gap-4">
            {
                user ?
                    <button
                        onClick={logout}
                        className="rounded-md bg-primary hover:bg-primary/80 px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="#"
                    >
                        <LogOut className='size-5' />
                    </button>
                    :
                    <Link
                        to={'/auth/login'}
                        className="rounded-md bg-primary hover:bg-primary/80 px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="#"
                    >
                        Login
                    </Link>
            }
        </div>

    )
}

export default UserAuth