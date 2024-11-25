import React from 'react'

const HeroSection = () => {
    return (
        <div className='min-h-[90vh] '>
            <div className='container'>
                <div className="md:flex">
                    <div className="md:w-1/2 text-tertiary py-12">
                        <h1 className='text-4xl text-cente md:text-5xl leading-normal playfair'>
                            Unlocking Opportunities <br /> Across Industries
                        </h1>
                        <p className='my-8 text-alt'>Zysk Group is a global leader in delivering cutting-edge technology, <br /> food
                            innovation, real estate solutions, and investment opportunities.</p>
                        <div className="flex justify-center">
                            <div className="group">
                                <button className='text-2xl buttonN after:bg-alt before:bg-tertiary hover:text-alt rounded px-12 py-3 rounded-full'>
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2"></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection