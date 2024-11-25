import React from 'react'
import { GrSettingsOption } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const ChooseUsSection = () => {
    return (
        <div>
            <div className="container">
                <div className="bg-white/10 rounded-3xl py-12">
                    <h3 className="text-center text-2xl md:text-3xl playfair text-secondary">Why Choose Us?:</h3>
                    <div className="grid md:grid-cols-3 gap-5 my-10">
                        <div className="transition-all p-4">
                            <h6 className="text-center text-3xl text-secondary font-light mb-5">Expertise</h6>
                            <div className="flex justify-center my-5">
                                <p className="text-center">
                                    At Zysk, we harness a diverse range of expertise across multiple sectors to deliver innovative and impactful solutions.
                                </p>
                            </div>
                        </div>
                        <div className="transition-all p-4">
                            <h6 className="text-center text-3xl text-secondary font-light mb-5">Global Reach</h6>
                            <div className="flex justify-center my-5">
                                <p className="text-center">
                                    Our global footprint enables us to connect with diverse markets and collaborate with international partners. We have established a strong presence in UK and Nigeria.
                                </p>
                            </div>
                        </div>
                        <div className="transition-all p-4">
                            <h6 className="text-center text-3xl text-secondary font-light mb-5">Innovative Solutions.</h6>
                            <div className="my-5">
                                <p className="text-center">
                                    Zysk is dedicated to driving innovation and delivering transformative solutions. We leverage technology, creativity, and expertise to pioneer groundbreaking solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUsSection