import React, { useContext, useEffect } from 'react';
import image from "../assets/jpg/4.jpg";
import { Helmet } from 'react-helmet-async';
import { ResourceContext } from '../utils/ResourceContext';

const ZyskConstruction = () => {
    const { setToggleNav } = useContext(ResourceContext)
    useEffect(() => {
        window.scrollTo(0, 0);
        setToggleNav(false);
    }, []);
    return (
        <main className='bg-primary text-tertiary'>
            <Helmet>
                <title>Zysk Construction | Commercial & Residential Construction Services</title>
                <meta name="description" content="Zysk Construction: Your trusted partner for top-quality construction and real estate solutions. From concept to completion, we deliver excellence. Contact us today for a free consultation." />
                <meta name="keywords" content="Zysk Group, construction, real estate, building," />
            </Helmet>
            <div className='py-1'>
                <div className="relative">
                    <img src={image} className='w-full md:h-[70vh] object-cover' alt="" />
                    <div className="absolute top-0 h-full w-full bg-black/70 flex items-center justify-center">
                        <div className="container">
                            <h1 className='text-[1.5rem] md:text-[2.5rem] text-center font-bold '>Building Dreams, Creating Value.</h1>
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <div className="container">
                        <div className="md:w-4/5">
                            <p>
                                Zysk Construction and Real Estate transforms ideas into tangible assets. Whether you’re
                                looking for bespoke home construction or investing in prime real estate, we bring expertise
                                and reliability to every project.
                                <br /> We prioritise quality, durability, and aesthetic excellence,
                                ensuring every property exceeds expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ZyskConstruction