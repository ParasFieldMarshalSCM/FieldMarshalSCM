import React from 'react'

import Illustration from '../../images/hero-illustration.svg'
import Earth from './Earth'

const Hero = () => (
    <section className="relative">
        {/* Illustration */}
        <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
            aria-hidden="true"
        >
            <img
                src={Illustration}
                className="max-w-none"
                width="1440"
                height="1265"
                alt="Hero Illustration"
            />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 md:pt-40">
                {/* Hero content */}
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
                        Future meets tech for better
                    </h1>
                    <p
                        className="text-xl text-teal-800 mb-10"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        We are a B2B/B2G SaaS Platform leveraging responsible
                        AI-ML models to solve ClimateTech problems of our
                        planet.
                    </p>
                </div>
                {/* Hero image */}
                <div
                    className="pt-16 md:pt-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <Earth />
                </div>
            </div>
        </div>
    </section>
)

export { Hero }
