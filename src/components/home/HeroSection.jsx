import React from 'react'
import HeroSlider from './HeroSlider'
import banner from "../../assets/svg/bannerr.svg"

const HeroSection = () => {
    return (
        <div className='2xl:min-h-full min-h-[90vh] mb-12 2xl:mb-20'>
            <div className='container'>
                <div className="md:flex">
                    <div className="md:w-1/2 text-tertiary py-12 md:pr-8 flex items-center">
                        <div className="">
                            <h1 className='text-4xl text-cente md:text-5xl leading-normal playfair'>
                                Unlocking Opportunities <br /> Across Industries
                            </h1>
                            <h6 className='my-8 text-alt text-lg'>Zysk Group is a global leader in delivering cutting-edge technology, <br /> food
                                innovation, real estate solutions, and investment opportunities.</h6>
                            <div className="flex justify-center">
                                <div className="group">
                                    <button className='text-2xl buttonN after:bg-alt before:bg-tertiary hover:text-alt rounded px-12 py-3 rounded-full'>
                                        Get in Touch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="px-2">
                            <img src={banner} alt="" />
                            <a className='text-primary' href="https://storyset.com/online">Online illustrations by Storyset</a>                        </div>
                        {/* <HeroSlider /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection