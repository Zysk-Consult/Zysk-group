import React from 'react'
import image from "../assets/jpg/1.jpg"
const ZyskTech = () => {
    return (
        <main className='bg-primary text-tertiary'>
            <div className='py-1'>
                <div className="relative">
                    <img src={image} className='w-full md:h-[70vh] object-cover' alt="" />
                    <div className="absolute top-0 h-full w-full bg-black/60 flex items-center justify-center">
                        <div className="container">
                            <h1 className='text-[1.5rem] md:text-[2.5rem] text-center font-bold '>Innovative Software Solutions for a Connected World</h1>
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <div className="container">
                        <div className="md:w-4/5">
                            <p>Zysk Technologies develops cutting-edge software tailored to both businesses and
                                consumers.
                                <br /> Our B2B solutions empower enterprises with advanced tools for seamless
                                operations, while our B2C applications enhance everyday experiences with intuitive and
                                efficient software.
                                <br />
                                From custom enterprise platforms to mobile applications, Zysk
                                Technologies delivers innovative solutions that meet today’s evolving digital needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ZyskTech