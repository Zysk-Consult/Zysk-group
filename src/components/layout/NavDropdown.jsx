import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavDropdown() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li className='me-3 hover_primary_color'> <Link className='nav-link fw-semibold fs-5' to={""}>{"link"}</Link> </li>
            {/* {showDropdown && ( */}
            <ul className='absolute bg-white text-blue-500 no_list w-auto top-[10px] z-1 p-4 rounded-bottom shadow' style={{ opacity: showDropdown ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
                <li className='text-nowrap mb-2'> <Link className='nav-link' to={"/support_living"}>Supported Living</Link> </li>
                <li className='text-nowrap mb-2'> <Link className='nav-link' to={""}>Domicilliary Care</Link> </li>
            </ul>
            {/* )} */}
        </div>
    );
}

export default NavDropdown;