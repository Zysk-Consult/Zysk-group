// import { Icon } from '@iconify-icon/react/dist/iconify.js';
import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const
            handleScroll = () => {
                setIsVisible(window.scrollY
                    > 100); // Adjust the threshold as needed
            };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const
        scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    console.log(isVisible)
    return (
        <>
            {isVisible && (
                <div className="z-3 fixed right-0 bottom-0 pr-2 pb-5">
                    <button
                        onClick={scrollToTop}
                        className={`rounded hover:bg-alt/70 bg-alt text-tertiary p4 ${isVisible ? 'visible' : ''}`}
                    >
                        <IoMdArrowDropdown size={40} className='rotate-180'/>
                        {/* <Icon icon={"bxs:up-arrow"} /> */}
                    </button>
                </div>
            )}
        </>
    );
}

export default ScrollToTopButton;