import React from 'react'
import image from "../assets/jpg/5.jpg"
const ZyskCapital = () => {
    return (
        <main className='bg-primary text-tertiary'>
            <div className='py-1'>
                <div className="relative">
                    <img src={image} className='w-full md:h-[70vh] object-cover' alt="" />
                    <div className="absolute top-0 h-full w-full bg-black/60 flex items-center justify-center">
                        <div className="container">
                            <h1 className='text-[1.5rem] md:text-[2.5rem] text-center font-bold '>Investing in the Future, Securing the Present.</h1>
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <div className="container">
                        <div className="md:w-4/5">
                            <p>
                                Zysk Capital empowers investors to make informed decisions in tangible asset markets. Our
                                expertise spans real estate opportunities locally and globally, helping you grow your
                                portfolio with confidence.
                                <br /> Trust Zysk Capital to turn your investment aspirations into reality
                                with a strategic and client-focused approach.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ZyskCapital