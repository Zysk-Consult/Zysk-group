import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import CompanySection from '../components/home/CompanySection'
import ChooseUsSection from '../components/home/ChooseUsSection'
import { Helmet } from 'react-helmet-async'

const Home = () => {
    return (
        <main className='text-tertiary pb-16 bg-primary'>
            <Helmet>
                <title>Home | Zysk Group | Technology Solutions | IT Consulting</title>
                <meta name="description" content="Zysk Group: Your trusted partner for innovative tech solutions, expert health consultancy, efficient food processing, strategic capital investment, and cutting-edge construction services. Empower your business today!" />
                <meta name="keywords" content="Zysk Group, technology consulting, capital investment, construction consulting, food processing solutions, business advisory" />
            </Helmet>
            <div className=''>
                <HeroSection />
                <AboutSection />
                <CompanySection />
                <ChooseUsSection />
            </div>
        </main>
    )
}

export default Home