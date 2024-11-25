import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import { navLinks } from '../../utils/constant'
import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
const date = new Date();
const Footer = () => {
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
        <footer id='contact' className='bg-primary text-white'>
            <div className="py-1 bg-black/30">
                <div className="my-12">
                    <div className="container playfair">
                        <div className="md:flex mb-5">
                            <div className="md:w-1/2 md:pr-16">
                                <p><b>Location: </b> Constitution Ave, Central Business Dis, Abuja 900211, Federal Capital Territory, Nigeria</p>
                                <p><b>Telephone:</b> 0191 637 5081</p>
                                <p><b>Email: </b> <Link to={"mailto:contact@myzysk.com"}>contact@myzysk.com</Link> </p>
                            </div>
                            <div className="md:w-1/2">
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
                                    <li key={each.id} className='group text-tertiary md:w-[fit-content] text-lg font-normal relative pb- mr-3'> <Link to={"#"} className='tracking-[0.1rem]'>{each.text.toUpperCase()}</Link> <div className="absolute bottom-0 w-[0px] transition-all group-hover:w-full pt-[2px] bg-white"></div> </li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                        <div className="flex justify-center my-8">
                            <ul className="flex text-center">
                                {socials.map((social) => (
                                    <Link to={"#"} key={social.name} className='mr-5 text-3xl hover:text-secondary transition-all'>{social.icon}</Link>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">© {date.getFullYear()} Zysk Group Limited</div>
                            <p className="flex">Website by <Link className='hover:text-alt' to={""}> Renzokins </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer