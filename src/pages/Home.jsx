import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import CompanySection from '../components/home/CompanySection'
import ChooseUsSection from '../components/home/ChooseUsSection'

const Home = () => {
    return (
        <main className='text-tertiary pb-16 bg-primary'>
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