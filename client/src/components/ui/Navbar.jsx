import { LogOut, Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../../store/useUserStore';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const { user, logout } = useUserStore();

    return (
        <header className="bg-white w-screen fixed">
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
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </Link>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={`absolute top-0 ${open ? "right-0" : "right-[200%]"} transition-all duration-500`}>
                        <nav aria-label="Global">
                            <ul className="flex flex-col w-screen h-screen justify-center items-center gap-6 bg-indigo-200 text-2xl">
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </Link>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                    <div className="flex items-center gap-4">

                        <div className="sm:flex sm:gap-4">

                            {
                                user ? <Link
                                    to={'/auth/login'}
                                    className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="#"
                                >
                                    Login
                                </Link>

                                    :
                                    <button
                                        onClick={logout}
                                        className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                        href="#"
                                    >
                                        <LogOut className='size-5' />
                                    </button>
                            }

                        </div>

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