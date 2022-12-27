import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/logo-v2.png'

const Header = () => (
    <header className="absolute w-full z-30">
        <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
                {/* Site branding */}
                <div className="shrink-0 mr-4">
                    {/* Logo */}
                    <Link className="flex items-center" to="/" aria-label="Cruip">
                        <img className="w-12 h-12" src={Logo} alt="logo" /> <span className="font-bold ml-2">FieldMarshalSCM</span>
                    </Link>
                </div>
                <nav className="flex grow">
                  {/* Desktop sign in links */}
                  <ul className="flex grow justify-end flex-wrap items-center">
                    <li className="hidden sm:block">
                      <a className="font-medium text-teal-800 hover:text-slate-300 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="https://www.linkedin.com/company/fieldmarshalscm/">LinkedIn</a>
                    </li>
                    <li className="ml-3">
                      <a className="hidden sm:block btn-sm text-white bg-emerald-600 hover:bg-indigo-600 w-full shadow-sm group" href="https://calendly.com/parasgoel_vf">
                        Book a demo <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                      </a>
                        <a className="block sm:hidden btn-sm text-white bg-emerald-600 hover:bg-indigo-600 w-full shadow-sm group" href="https://calendly.com/parasgoel_vf">
                            Demo <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                        </a>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
    </header>
)

export { Header }
