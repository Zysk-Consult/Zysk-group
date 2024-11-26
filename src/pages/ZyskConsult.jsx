import React from 'react'
import image from "../assets/jpg/2.jpg"
import { Helmet } from 'react-helmet-async'
const ZyskConsult = () => {
    return (
        <main className='bg-primary text-tertiary'>
            <Helmet>
               <title>Zysk Consultancy | Job Application Assistance | Career Coaching"</title>
                <meta name="description" content="Zysk Consultancy: Your trusted partner for seamless immigration and job placement. We simplify complex processes, connect you with top employers, and guide you every step of the way." />
                <meta name="keywords" content="Zysk Group, job application, career coaching, career advice, interview preping" />
            </Helmet>
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