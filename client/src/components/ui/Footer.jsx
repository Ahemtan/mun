import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-primary lg:justify-start">
                            <img src='/logo.svg' className='h-16' alt="logo" />
                        </div>

                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                            cum itaque neque.
                        </p>
                    </div>

                    <ul
                        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                    >
                        <li>
                            <Link to="#" className="text-gray-700 transition hover:text-gray-700/75" href="#"> Home </Link>
                        </li>

                        <li>
                            <Link to="#" className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </Link>
                        </li>

                        <li>
                            <Link to="#" className="text-gray-700 transition hover:text-gray-700/75" href="#"> Contact </Link>
                        </li>

                        <li>
                            <Link to="#" className="text-gray-700 transition hover:text-gray-700/75" href="#"> Register </Link>
                        </li>
                    </ul>

                </div>
                <ul
                    className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-4 lg:justify-end lg:gap-12"
                >
                    <li>
                        <Link to="#" className="text-primary transition hover:text-primary/75" href="#"><Instagram /></Link>
                    </li>

                    <li>
                        <Link to="#" className="text-primary transition hover:text-primary/75" href="#"><Facebook /></Link>
                    </li>

                    <li>
                        <Link to="#" className="text-primary transition hover:text-primary/75" href="#"><Twitter /></Link>
                    </li>

                </ul>

                <p className="mt-12 text-center text-sm text-gray-500">
                    Copyright &copy; Ahemtan 2022. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer