import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMemuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='page-container'>
           <div className='header-container flex items-center justify-between '>
            <Link className='w-20'>
                 {/* logo section */}
                  <img src={logo} alt="" />
            </Link>
       
           <div className=''>
            {/* nav Item section */}
            {/* items-center hidden space-x-8 lg:flex */}
             <ul className='items-center hidden lg:flex tracking-wide font-medium  space-x-8'>
                <li>
                    <NavLink to="/" 
                    className={({isActive}) => (isActive? "active": "default")}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/resturent" 
                    className={({isActive}) => (isActive? "active": "default")}
                    >Restuarant</NavLink>
                </li>
                <li>
                    <NavLink to="/about" 
                    className={({isActive}) => (isActive? "active": "default")}
                    >About Us</NavLink>
                </li>
             </ul>
             {/* Mobile navber section */}
                <div className='lg:hidden mx-5'>
                    {/* Dropdown Open Button */}
                <button
                        aria-label='Open Menu'
                        title="Open Menu"
                        onClick={()=> setIsMenuOpen(true)}
                    >
                         <Bars3BottomRightIcon className='w-5 text-gray-600' />  
                    </button>
                    {
                        isMemuOpen && (
                            // absolute top-0 left-0 w-full z-10
                            <div className='absolute top-0 left-0 w-full z-10'>
                                
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                    <div>
                                    <Link className='w-20 inline-flex items-center'>
                                        {/* logo section */}
                                        <img src={logo} alt="" />
                                    </Link>
                                    </div>
                                    <div className='mx-5'>
                                        <button 
                                        aria-label='Close Menu'
                                        title="Close Menu"
                                        onClick={()=> setIsMenuOpen(false)}
                                        >
                                        <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                    </div>
                                    {/* Mobile nav item section */}
                                    <nav>
                                    <ul className='space-y-4'>
                                    <li>
                                        <NavLink to="/" 
                                        className={({isActive}) => (isActive? "active": "default")}
                                        >Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/resturent" 
                                        className={({isActive}) => (isActive? "active": "default")}
                                        >Restuarant</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" 
                                        className={({isActive}) => (isActive? "active": "default")}
                                        >About Us</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    )}
                </div>
           </div>
           </div>
        </div>
    );
};

export default Header;