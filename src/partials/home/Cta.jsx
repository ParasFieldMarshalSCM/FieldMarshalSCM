import React from 'react'

import Illustration from '../../images/cta-illustration.svg'
import { Link } from 'react-router-dom'

const Cta = () => (
    <section className="relative border-t border-slate-800">
        {/* Bg gradient: top */}
        <div
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
            aria-hidden="true"
        />
        {/* Illustration */}
        <div
            className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -mt-8 pointer-events-none -z-10"
            aria-hidden="true"
        >
            <img
                src={Illustration}
                className="max-w-none"
                width="1440"
                height="440"
                alt="Features 01 Illustration"
            />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
                {/* Section header */}
                <div
                    className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
                    data-aos="fade-up"
                >
                    <h2 className="h2 font-hkgrotesk">Contact Us</h2>
                    <p className="text-xl my-6 text-teal-800">
                        Contact us to learn more about our services and how we
                        can help you.
                    </p>
                </div>
                {/* Buttons */}
                <div className="text-center">
                    <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <a
                                className="btn text-white bg-emerald-600 hover:bg-emerald-900 w-full shadow-sm group"
                                href="https://calendly.com/parasgoel_vf"
                            >
                                Book a demo{' '}
                                <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                    -&gt;
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export { Cta }
