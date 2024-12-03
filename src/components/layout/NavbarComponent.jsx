import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../utils/constant'
import NavItem from './NavItem'
import MobileNav from './MobileNav'
import { ResourceContext } from '../../utils/ResourceContext'
import logo from "../../assets/png/logo.png"

const NavbarComponent = () => {
  const { toggleNav } = useContext(ResourceContext);
  return (
    <header className='bg-primary'>
      <div className='bg-black/20 py-6'>
        <div className="container text-white">
          <div className="flex justify-between md:justify-start md:items-center">
            <div className="md:w-[25%]">
              <div className="w-[80px]">
                <Link className='' to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="md:w-[75%]">
              <nav>
                <ul className='hidden md:flex'>
                  {!toggleNav && (
                    <div className='relative playfair'>
                      <li className='group text-tertiary hover:text-secondary text-lg font-normal relative pb- mr-8'>
                         <a href={ "/"} className='tracking-[0.1rem] flex items-center'>HOME</a> <div className="absolute bottom-0 w-[0px] transition-all group-hover:w-full pt-[2px] bg-white"></div> </li>
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
                  )}
                  {navLinks.map((each, i) => {
                    return (
                      <NavItem key={each.id} each={each} navToggle={toggleNav} />
                    )
                  })}
                </ul>
                <div className="block md:hidden">
                  <MobileNav navToggle={toggleNav} />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavbarComponent