import { Menu, X } from 'lucide-react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UserAuth from '../useAuth';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/#about",
        },
        {
            name: "Contact",
            href: "/#contact",
        },
        {
            name: "Register",
            href: "/register",
        },
    ]

    return (
        <header className="bg-white w-screen fixed z-[9999]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link to={"/"} className="block text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <img width={64} height={64} src="/logo.svg" alt='logo' />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-lg">

                                {
                                    links.map((link) => (
                                        <li key={link.name}>
                                            <Link className="text-gray-500 transition hover:text-gray-500/75" to={link.href}>{link.name}</Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </nav>
                    </div>

                    <div className={`absolute top-0 ${open ? "right-0" : "right-[200%]"} transition-all duration-500`}>
                        <nav aria-label="Global">
                            <ul className="flex flex-col w-screen h-screen justify-center items-center gap-6 bg-indigo-200 text-2xl">
                                {
                                    links.map((link) => (
                                        <li key={link.name}>
                                            <Link className="text-gray-500 transition hover:text-gray-500/75" href={link.herf}>{link.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>


                    <div className="flex items-center gap-4">

                        <UserAuth />

                        <div className="block md:hidden relative z-[99]">
                            <button onClick={() => setOpen(!open)} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                {
                                    open ? <X className='size-5' /> : <Menu className='size-5' />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar