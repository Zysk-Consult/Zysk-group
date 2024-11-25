import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            {/* <FirstNav /> */}
            <NavbarComponent />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout