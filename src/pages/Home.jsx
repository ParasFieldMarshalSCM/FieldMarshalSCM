import React from 'react'

import { Header } from '../components/Header'
import { Hero } from '../partials/home/Hero'
import { AboutUs } from '../partials/home/AboutUs'
import { HowWereDifferent } from '../partials/home/HowWereDifferent'
import { Blogs } from '../partials/home/Blogs'
import { Cta } from '../partials/home/Cta'
import { Footer } from '../components/Footer'

const Home = () => (
    <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="grow">
            <Hero />
            <AboutUs />
            <HowWereDifferent />
            <Blogs />
            <Cta />
        </main>
        <Footer />
    </div>
)

export default Home
