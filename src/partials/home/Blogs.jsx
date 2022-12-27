import React, { useState } from 'react'

import Illustration from '../../images/pricing-illustration.svg'

const Blogs = () => {
    const [annual, setAnnual] = useState(true)

    return (
        <section className="relative">
            {/* Illustration */}
            <div
                className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -mb-24 pointer-events-none -z-10"
                aria-hidden="true"
            >
                <img
                    src={Illustration}
                    className="max-w-none"
                    width="1440"
                    height="440"
                    alt="Pricing Illustration"
                />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-10 pb-12 md:pb-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-12">
                        <h2 className="h2 font-hkgrotesk mb-4">Blogs</h2>
                        <p className="text-xl text-teal-800">
                            Stay up to date with the latest news and trends
                            about our company and the industry.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <div data-aos="fade-up" data-aos-delay="100">
                                <a
                                    className="btn text-white bg-emerald-600 hover:bg-emerald-900 w-full shadow-sm group"
                                    href="https://www.linkedin.com/company/fieldmarshalscm/posts/?feedView=all"
                                >
                                    Visit our LinkedIn Page{' '}
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
}

export { Blogs }
