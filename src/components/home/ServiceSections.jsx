import React from 'react'
import ServiceSlider from './ServiceSlider'

const ServiceSections = () => {
    return (
        <div className='bg-black/30 py-16 mb-16'>
            <div className="container">
                <h3 className="text-center text-4xl mb-12">Our Services</h3>
                <ServiceSlider />
            </div>
        </div>
    )
}

export default ServiceSections