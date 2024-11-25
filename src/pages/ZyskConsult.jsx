import React from 'react'
import image from "../assets/jpg/2.jpg"
const ZyskConsult = () => {
    return (
        <main className='bg-primary text-tertiary'>
            <div className='py-1'>
                <div className="relative">
                    <img src={image} className='w-full md:h-[70vh] object-cover' alt="" />
                    <div className="absolute top-0 h-full w-full bg-black/60 flex items-center justify-center">
                        <div className="container">
                            <h1 className='text-[1.5rem] md:text-[2.5rem] text-center font-bold '>Navigating Change, Empowering Success</h1>
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <div className="container">
                        <div className="md:w-4/5">
                            <p>
                                Zysk Consulting specialises in simplifying complex immigration processes, helping individuals
                                secure job opportunities and businesses gain the right contracts.
                                <br />
                                Whether it’s local or
                                international business support or ensuring a smooth migration journey, we are here to turn
                                challenges into opportunities. Let us guide you towards your goals with tailored solutions
                                and expert advice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ZyskConsult