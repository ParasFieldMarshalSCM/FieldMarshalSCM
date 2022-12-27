import React, { useEffect } from 'react'

import Illustration from '../../images/features-illustration.svg'
import FeaturesIcon01 from '../../images/features-icon-01.svg'
import FeaturesIcon02 from '../../images/features-icon-02.svg'
import FeaturesIcon03 from '../../images/features-icon-03.svg'
import FeaturesIcon04 from '../../images/features-icon-04.svg'

function AboutUs() {
    return (
        <section className="relative" id="about-us">
            {/* Bg illustration */}
            <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10"
                aria-hidden="true"
            >
                <img
                    src={Illustration}
                    className="max-w-none"
                    width="1440"
                    height="440"
                    alt="Illustration"
                />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 font-hkgrotesk mb-4">About Us</h2>
                        <div className="w-full">
                            <p className="text-xl text-teal-800">
                                We are a B2B/B2G SaaS Platform leveraging
                                responsible AI-ML models to solve ClimateTech
                                problems of our planet. Covid-19 taught us to be
                                more humble and collaborative in everything that
                                we do in our daily lives whether personal or
                                professional. It also enabled newer ways of
                                working through advancements in technology, be
                                it zoom calls or metaverse connects. We at
                                FieldMarshalSCM, see "Tech" as the common key
                                enabler in this new paradigm. We are Subject
                                Matter Experts (SMEs) in building large scale
                                AI-ML deep learning models. We have emabarked on
                                a mission to leverage these predictive models to
                                solve ClimateTech problems of the world
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { AboutUs }
