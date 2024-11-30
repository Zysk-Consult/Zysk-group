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
    <div className='bg-primary'>
      <div className='bg-black/20 py-6'>
        <div className="container text-white">
          <div className="flex justify-between md:justify-start md:items-center">
            <div className="md:w-[25%]">
              <div className="w-[70px]">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="md:w-[75%]">
              <nav>
                <ul className='hidden md:flex'>
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
    </div>
  )
}

export default NavbarComponent