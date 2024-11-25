import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../utils/constant'
import NavItem from './NavItem'
import MobileNav from './MobileNav'

const NavbarComponent = () => {
  return (
    <div className=' bg-alt '>
      <div className='bg-black/20 py-6'>
        <div className="container text-white">
          <div className="flex justify-between md:justify-start">
            <div className="md:w-[25%]"></div>
            <div className="md:w-[75%]">
              <nav>
                <ul className='hidden md:flex'>
                  {navLinks.map((each, i) => {
                    return (
                      <NavItem key={each.id} each={each} />
                    )
                  })}
                </ul>
                <div className="block md:hidden">
                  <MobileNav />
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