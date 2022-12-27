import React, { useState } from 'react'

import Illustration from '../../images/features-illustration-02.svg'
import FeaturesImage from '../../images/features-image.png'
import FeaturesIcon01 from '../../images/features-icon-01.svg'
import FeaturesIcon02 from '../../images/features-icon-02.svg'
import FeaturesIcon03 from '../../images/features-icon-03.svg'

function HowDifferent() {
    const [category, setCategory] = useState('1')

    return (
        <section className="relative border-t border-slate-800">
            {/* Bg gradient: top */}
            <div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
                aria-hidden="true"
            />
            {/* Illustration */}
            <div
                className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10"
                aria-hidden="true"
            >
                <img
                    src={Illustration}
                    className="max-w-none"
                    width="1440"
                    height="453"
                    alt="Features 02 Illustration"
                />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 font-hkgrotesk mb-4">
                            How We're Different
                        </h2>
                        {/*<div className="max-w-4xl mx-auto">*/}
                        {/*    <p className="text-xl text-teal-800">*/}
                        {/*        A holistic approach to reduce Green House Gas emissions for firms/ local govt bodies*/}
                        {/*        around the world.*/}
                        {/*        We leverage econometric ML models to study clients' entire value chain to offer e2e*/}
                        {/*        solution in reducing carbon footprint.*/}
                        {/*        How are we different:*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 gap-y-4">
                            <div className="swiper-slide h-auto flex flex-col bg-teal-900 opacity-80 p-6 rounded">
                                <img
                                    className="mb-3"
                                    src={FeaturesIcon01}
                                    width="56"
                                    height="56"
                                    alt="Icon 01"
                                />
                                <div className="grow">
                                    <div className="font-hkgrotesk font-bold text-xl">
                                        Econometric Modelling
                                    </div>
                                    <div className="text-teal-600 mb-3">
                                        One stop ESG dashboard detailing impact
                                        of “green initiatives” on the firms’
                                        balance sheet in currency values
                                        (Dollar/ Euro). This helps CXO’s make
                                        sound decisions on the agreed
                                        initiatives ie whether to double down on
                                        them or to course correct in time.
                                    </div>
                                </div>
                                <div className="text-right">
                                    <a
                                        className="font-medium text-emerald-600 inline-flex items-center transition duration-150 ease-in-out group"
                                        href="src/partials#0"
                                    >
                                        Learn More{' '}
                                        <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                            -&gt;
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide h-auto flex flex-col bg-teal-900 opacity-80 p-6 rounded">
                                <img
                                    className="mb-3"
                                    src={FeaturesIcon02}
                                    width="56"
                                    height="56"
                                    alt="Icon 02"
                                />
                                <div className="grow">
                                    <div className="font-hkgrotesk font-bold text-xl">
                                        Value Chain Analytics
                                    </div>
                                    <div className="text-teal-600 mb-3">
                                        Optimization of supply chain starting
                                        all the way from sourcing to final
                                        output.
                                    </div>
                                </div>
                                <div className="text-right">
                                    <a
                                        className="font-medium text-emerald-600 inline-flex items-center transition duration-150 ease-in-out group"
                                        href="src/partials#0"
                                    >
                                        Learn More{' '}
                                        <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                            -&gt;
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide h-auto flex flex-col bg-teal-900 opacity-80 p-6 rounded">
                                <img
                                    className="mb-3"
                                    src={FeaturesIcon03}
                                    width="56"
                                    height="56"
                                    alt="Icon 03"
                                />
                                <div className="grow">
                                    <div className="font-hkgrotesk font-bold text-xl">
                                        Marketing Measurement
                                    </div>
                                    <div className="text-teal-600 mb-3">
                                        Market Mix Modelling (MMM) to help
                                        CXO&#39;s visualize efficiency and
                                        effectiveness of their marketing spend
                                    </div>
                                </div>
                                <div className="text-right">
                                    <a
                                        className="font-medium text-emerald-600 inline-flex items-center transition duration-150 ease-in-out group"
                                        href="src/partials#0"
                                    >
                                        Learn More{' '}
                                        <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                            -&gt;
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { HowDifferent }
