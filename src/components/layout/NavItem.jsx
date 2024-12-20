import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav';

const NavItem = ({ each, navToggle }) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <div>
            {
                each.subNav ? (
                    <div className='relative playfair' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <li className='group text-tertiary hover:text-secondary text-lg font-normal relative pb- mr-8'> <a href={navToggle ? each.link : "/"} className='tracking-[0.1rem] flex items-center'>{each.text.toUpperCase()} {each.subNav && <IoMdArrowDropdown />}</a> <div className="absolute bottom-0 w-[0px] transition-all group-hover:w-full pt-[2px] bg-white"></div> </li>
                        {each.subNav && showDropdown && (
                            <ul className='absolute flex flex-col z-[4] bg-primary text-alt  w-auto top-[25px] z-1 p-4 transition-all duration-[5000ms] shadow' style={{ opacity: showDropdown ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
                                {each.subNav.map((sub) => {
                                    return (
                                        <li
                                            className='group w-[fit-content] text-tertiary text-sm mb-3 font-normal relative pb- mr-3'>
                                            <Link to={sub.link} className='tracking-[0.1rem] text-nowrap'>{sub.text.toUpperCase()}</Link> <div className="absolute bottom-0 w-[0px] transition-all group-hover:w-full pt-[2px] bg-white"></div> </li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>
                ) : navToggle && (
                    <div className='relative playfair' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <li className='group text-tertiary hover:text-secondary text-lg font-normal relative pb- mr-8'> <a href={navToggle ? each.link : "/"} className='tracking-[0.1rem] flex items-center'>{each.text.toUpperCase()} {each.subNav && <IoMdArrowDropdown />}</a> <div className="absolute bottom-0 w-[0px] transition-all group-hover:w-full pt-[2px] bg-white"></div> </li>
                        {/* {each.subNav && showDropdown && (
                            <ul className='absolute flex flex-col z-[4] bg-primary text-alt  w-auto top-[25px] z-1 p-4 transition-all duration-[5000ms] shadow' style={{ opacity: showDropdown ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
                                {each.subNav.map((sub) => {
                                    return (
                                        <li
                                            className='group w-[fit-content] text-tertiary text-sm mb-3 font-normal relative pb- mr-3'>
                                            <Link to={sub.link} className='tracking-[0.1rem] text-nowrap'>{sub.text.toUpperCase()}</Link> <div className="absolute bottom-0 w-[0px] transition-all group-hover:w-full pt-[2px] bg-white"></div> </li>
                                    )
                                })}
                            </ul>
                        )} */}
                    </div>
                )
            }
        </div>
    )
}

export default NavItem