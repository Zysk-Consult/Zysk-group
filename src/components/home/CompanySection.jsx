import React from 'react'
import { BsCurrencyExchange } from 'react-icons/bs'
import { FaUsersGear } from 'react-icons/fa6'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { GrSettingsOption } from 'react-icons/gr'
import { IoMdConstruct } from 'react-icons/io'
import { Link } from 'react-router-dom'

const CompanySection = () => {
    const groupData = [
        {
            id: 1,
            title: "Zysk Technology",
            desc: "Zysk Technology division is at the forefront of innovation, developing cutting-edge solutions to drive business growth and efficiency. Our team of experts specializes in software development, data analytics, and cybersecurity, delivering tailored solutions to meet the unique needs of our clients.",
            icon: <GrSettingsOption size={50} />,
            link: "/technology"
        },
        {
            id: 2,
            title: "Zysk Consulting",
            desc: "Zysk Consulting services provide strategic guidance and operational expertise to help businesses navigate complex challenges and achieve their goals. Our experienced consultants offer a wide range of services, including business strategy, health care interview preping, and organizational development.",
            icon: <FaUsersGear size={50} />,
            link: "/consulting"
        },
        {
            id: 3,
            title: "Zysk Food",
            desc: "Zysk Food processing division is committed to producing high-quality, nutritious food products. Our state-of-the-art facilities and rigorous quality control processes ensure that our products meet the highest standards of safety and taste.",
            icon: <GiOpenedFoodCan size={50} />,
            link: "/foods"
        },
        {
            id: 4,
            title: "Zysk Constructions",
            desc: "Zysk  Construction division specializes in delivering innovative and sustainable construction solutions. Our experienced team of engineers and builders is dedicated to delivering projects on time and within budget, while maintaining the highest standards of quality and safety.",
            icon: <IoMdConstruct size={50} />,
            link: "/constructions"
        },
        {
            id: 5,
            title: "Zysk Capital",
            desc: "Zysk Capital investment division focuses on identifying and investing in high-growth businesses with strong potential. Our team of investment professionals leverages their extensive industry knowledge and network to source and evaluate investment opportunities, providing capital and expertise to help businesses thrive.",
            icon: <BsCurrencyExchange size={50} />,
            link: "capital"
        },
    ]
    return (
        <div id='service'>
            <div className="container">
                <h3 className="text-center text-2xl md:text-3xl playfair text-tertiary">Our Companies:</h3>
                {/* <div className="flex justify-center my-8">
                    <p className="text-center md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit reiciendis possimus praesentium, optio vero! Praesentium omnis, sed labore, quod inventore magni officiis eius temporibus libero soluta sit totam? Cum.</p>
                </div> */}
                <div className="grid md:grid-cols-3 gap-8 my-16">
                    {groupData.map((group) => {
                        return (
                            <div className="rounded-xl hover:scale-[1.01] hover:bg-black/50 transition-all p-4 shadow-2xl hover:shadow-black/50 bg-black/40">
                                <div className="md:flex flex-col justify-between items-between h-full">
                                    <div className="">
                                        <h6 className="text-center text-lg font-bold mb-5">{group.title}</h6>
                                        <div className="flex justify-center my-5">
                                            <span>
                                                {group.icon}
                                            </span>
                                        </div>
                                        <p className='mb-5'>{group.desc}</p>
                                    </div>
                                <Link to={group.link} className='btn_link py-4 w-[130px] text-alt hover:text-tertiary'><span>Learn more</span></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CompanySection