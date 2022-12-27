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
                                href="src/partials#0"
                            >
                                Our Story
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-teal-800 hover:text-slate-300 transition duration-150 ease-in-out"
                                href="src/partials#0"
                            >
                                Work With Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
                {/* Social links */}
                <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                    <li>
                        <a
                            className="flex justify-center items-center text-emerald-600 hover:text-slate-300 transition duration-150 ease-in-out"
                            href="src/partials#0"
                            aria-label="Twitter"
                        >
                            <svg
                                className="w-8 h-8 fill-current"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                            </svg>
                        </a>
                    </li>
                    <li className="ml-2">
                        <a
                            className="flex justify-center items-center text-emerald-600 hover:text-slate-300 transition duration-150 ease-in-out"
                            href="src/partials#0"
                            aria-label="Medium"
                        >
                            <svg
                                className="w-8 h-8 fill-current"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                            </svg>
                        </a>
                    </li>
                    <li className="ml-2">
                        <a
                            className="flex justify-center items-center text-emerald-600 hover:text-slate-300 transition duration-150 ease-in-out"
                            href="src/partials#0"
                            aria-label="Github"
                        >
                            <svg
                                className="w-8 h-8 fill-current"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                            </svg>
                        </a>
                    </li>
                </ul>
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
