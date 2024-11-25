import React from 'react'
import image from "../assets/jpg/3.jpg"
const ZyskFoods = () => {
    return (
        <main className='bg-primary text-tertiary'>
            <div className='py-1'>
                <div className="relative">
                    <img src={image} className='w-full md:h-[70vh] object-cover' alt="" />
                    <div className="absolute top-0 h-full w-full bg-black/60 flex items-center justify-center">
                        <div className="container">
                            <h1 className='text-[1.5rem] md:text-[2.5rem] text-center font-bold '>From Farm to Plate, Redefining Food Processing</h1>
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <div className="container">
                        <div className="md:w-4/5">
                            <p>
                                Zysk Foods revolutionises food processing with a focus on quality, safety, and sustainability.
                                Our advanced techniques ensure premium products that nourish and delight.
                                <br />From sourcing
                                the finest ingredients to delivering finished goods, Zysk Foods commits to excellence at
                                every step of the process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ZyskFoods