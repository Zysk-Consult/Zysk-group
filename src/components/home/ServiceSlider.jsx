import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imag1 from "../../assets/jpg/1.jpg"
import imag2 from "../../assets/jpg/2.jpg"
import imag3 from "../../assets/jpg/3.jpg"
import imag4 from "../../assets/jpg/4.jpg"
import imag5 from "../../assets/jpg/5.jpg"
import { useNavigate } from 'react-router-dom';


const ServiceSlider = () => {
    const navigate = useNavigate();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const images = [
        {
            id: 1,
            src: imag1,
            text: "Driving innovation through cutting-edge software solutions and data-driven insights.",
            link: "technology",
            groupTitle: "Technology Solutions"
        },
        {
            id: 3,
            src: imag2,
            text: "Providing strategic guidance and operational expertise to empower businesses.",
            link: "consulting",
            groupTitle: "Consulting & Career Coaching"
        },
        {
            id: 3,
            src: imag3,
            text: "Committed to nourishing lives with high-quality, delicious food products.",
            link: "food",
            groupTitle: "Food Processing"
        },
        {
            id: 4,
            src: imag4,
            text: "Building a better future with innovative and sustainable construction solutions.",
            link: "constructions",
            groupTitle: "Construction & Real Estate"
        },
        {
            id: 5,
            src: imag5,
            text: "Investing in tomorrow's success stories, one venture at a time.",
            link: "capital",
            groupTitle: "Capital Investment"
        },
        {
            id: 6,
            src: imag5,
            text: "Zysk Group is a multifaceted organization that contributes to the growth and prosperity of communities worldwide.",
            link: "",
            groupTitle: "Zysk Group"
        },
    ]

    return (
        <div className='my-14'>
            <Carousel
                responsive={responsive}
                containerClass=""
                itemClass="px-8 h-full"
            >
                {
                    images.map((each) => (
                        <div key={each.id} className="group h-full bg-white/10 rounded-t-lg">
                            <div className="overflow-hidden rounded-t-lg">
                                <img src={each.src} className='group-hover:scale-105 transition-all duration-1000' alt="" />
                            </div>
                            <div className="p-4 ">
                                <h4 className='text-2xl font-bold mb-4'>{each.groupTitle}</h4>
                                <p className='text-white/80'>{each.text}</p>
                                <div className="flex mt-5">
                                    <div className="overflow-hidden rounded-full">
                                        <button to={""} onClick={() => navigate(`/${each.link}`)} className='btn_link rounded-full bg-alt/20 text-tertiary h-full px-6 py-2 hover:bg-alt/60 hover:text-white'><span>Learn More</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default ServiceSlider