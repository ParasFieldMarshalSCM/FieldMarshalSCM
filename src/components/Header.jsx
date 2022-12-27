import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/logo-v2.png'

const Header = () => (
    <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
                {/* Site branding */}
                <div className="shrink-0 mr-4">
                    {/* Logo */}
                    <Link className="block" to="/" aria-label="Cruip">
                        <img className="w-12 h-12" src={Logo} alt="logo" />
                    </Link>
                </div>
                {/* Desktop navigation */}
                {/*<nav className="flex grow">*/}
                {/*  /!* Desktop sign in links *!/*/}
                {/*  <ul className="flex grow justify-end flex-wrap items-center">*/}
                {/*    <li>*/}
                {/*      <Link className="font-medium text-teal-800 hover:text-slate-300 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" to="/signin">Sign in</Link>*/}
                {/*    </li>*/}
                {/*    <li className="ml-3">*/}
                {/*      <Link className="btn-sm text-white bg-emerald-600 hover:bg-indigo-600 w-full shadow-sm group" to="/signup">*/}
                {/*        Get Started <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*</nav>*/}
            </div>
        </div>
    </header>
)

export { Header }
