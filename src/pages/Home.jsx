import React, { useContext, useEffect } from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import CompanySection from '../components/home/CompanySection'
import ChooseUsSection from '../components/home/ChooseUsSection'
import { Helmet } from 'react-helmet-async'
import ServiceSections from '../components/home/ServiceSections'
import ContactSection from '../components/home/ContactSection'
import { ResourceContext } from '../utils/ResourceContext'

const Home = () => {
    const { setToggleNav } = useContext(ResourceContext)
    useEffect(() => {
        setToggleNav(true)
    }, [])

    return (
        <main className='text-tertiary pb-16 bg-primary'>
            <Helmet>
                <title>Home | Zysk Group | Technology Solutions | IT Consulting</title>
                <meta name="description" content="Zysk Group: Your trusted partner for innovative tech solutions, expert health consultancy, efficient food processing, strategic capital investment, and cutting-edge construction services. Empower your business today!" />
                <meta name="keywords" content="Zysk Group, technology consulting, capital investment, construction consulting, food processing solutions, business advisory" />
            </Helmet>
            <div className=''>
                <HeroSection />
                <ServiceSections />
                <AboutSection />
                <CompanySection />
                <ChooseUsSection />
                <ContactSection />
            </div>
        </main>
    )
}

export default Home