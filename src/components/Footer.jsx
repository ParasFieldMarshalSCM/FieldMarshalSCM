import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo-v2.png'

const Footer = () => (
    <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Blocks */}
            <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 md:py-12 border-t border-teal-800">
                {/* 1st block */}
                <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
                    <div className="mb-2">
                        {/* Logo */}
                        <Link className="inline-flex" to="/" aria-label="Cruip">
                            <img className="w-12 h-12" src={Logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                {/* 2nd block */}
                <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    {/*<h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">*/}
                    {/*    Products*/}
                    {/*</h6>*/}
                    {/*<ul className="text-sm space-y-2">*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Cube Manage*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Cube Analyse*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Cube Launch*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Experimentation*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </div>
                {/* 3rd block */}
                <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    {/*<h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">*/}
                    {/*    Resources*/}
                    {/*</h6>*/}
                    {/*<ul className="text-sm space-y-2">*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Blog*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Cheat Sheet*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Channel Partners*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Affiliate Program*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </div>
                {/* 4th block */}
                <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    {/*<h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">*/}
                    {/*    Projects*/}
                    {/*</h6>*/}
                    {/*<ul className="text-sm space-y-2">*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Session Recording*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Feature Flags*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Heatmaps*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <a*/}
                    {/*            className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"*/}
                    {/*            href="src/partials#0"*/}
                    {/*        >*/}
                    {/*            Correlation Analysis*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </div>
                {/* 5th block */}
                <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <h6 className="text-xs text-slate-200 font-semibold uppercase underline mb-3">
                        Company
                    </h6>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a
                                className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"
                                href="#about-us"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"
                                href="https://calendly.com/parasgoel_vf"
                            >
                                Book a Demo
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"
                                href="https://www.linkedin.com/company/fieldmarshalscm"
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
                {/* Links */}
                <div className="text-sm text-slate-600">
                    <a
                        className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"
                        href="src/partials#0"
                    >
                        Terms
                    </a>{' '}
                    ·{' '}
                    <a
                        className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"
                        href="src/partials#0"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    </footer>
)

export { Footer }
