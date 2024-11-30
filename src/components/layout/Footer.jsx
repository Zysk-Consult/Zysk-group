import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import { navLinks } from '../../utils/constant'
import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { ResourceContext } from '../../utils/ResourceContext'
import logo from "../../assets/png/logo.png";

const date = new Date();
const Footer = () => {
    const { toggleNav } = useContext(ResourceContext);

    const socials = [
        {
            name: "Facebook",
            icon: <FaFacebook />
        },
        {
            name: "twitter",
            icon: <FaXTwitter />
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />
        },
        {
            name: "telegram",
            icon: <FaTelegram />
        },
    ]
    return (
        <footer className='bg-primary text-white'>
            <div className="py-1 bg-black/30">
                <div className="my-12">
                    <div className="container playfair">
                        <div className="md:flex mb-5">
                            <div className="md:w-1/2 ">
                                <div className="md:w-4/5">
                                    <div className="mb-5 flex justify-center">
                                        <div className="w-[70px]">
                                            <Link to={"/"}>
                                                <img src={logo} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <p>Zysk Group is a global leader in delivering cutting-edge technology,
                                        food innovation, real estate solutions, and investment opportunities.
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/2 mt-10 md:mt-0">
                            <h5 className='text-2xl font-semibold text-tertiary playfair mb-4'>STAY CONNECTED</h5>
                                <p className='uppercase manrope mb-3'>Newsletter</p>
                                <div className=" md:w-4/5">
                                    <form>
                                        <div className='my-4 relative overflow-hidden'>
                                            <input className='focus-visible:outline-0 w-full py-3 border-alt border pr-[120px] bg-primary/50 rounded-full px-3' type="text" />
                                            <div className="absolute right-0 h-full bottom-0">
                                                <button to={""} className='btn_link rounded-full bg-alt text-tertiary h-full px-6 min-w-[120px] hover:text-tertiary'><span>Subscribe</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-center my-5">
                            <ul className="md:flex text-center">
                                {navLinks.map((each) => (
                                    <li key={each.id} className='group text-tertiary  hover:text-secondary md:w-[fit-content] text-lg font-normal relative pb- mr-3'>
                                        <a href={toggleNav ? each.link : "/"} className='tracking-[0.1rem]'>{each.text.toUpperCase()}</a>
                                        <div className="absolute bottom-0 w-[0px] transition-all group-hover:w-full pt-[2px] bg-white"></div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                        {/* <div className="flex justify-center my-8">
                            <ul className="flex text-center">
                                {socials.map((social) => (
                                    <Link to={"#"} key={social.name} className='mr-5 text-3xl hover:text-secondary transition-all'>{social.icon}</Link>
                                ))}
                            </ul>
                        </div> */}
                        <div className="flex justify-between">
                            <div className="flex">© {date.getFullYear()} Zysk Group Limited</div>
                            <p className="flex">Website by <Link className='hover:text-alt ml-1' to={"https://renzokins.com"}> Renzokins </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer