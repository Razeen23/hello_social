import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/horizontal-logo-white.png';
// import DockDemo from '../page/DockDemo';
import ShinyButton from "../@/components/magicui/shiny-button";

// Hamburger Component
const Hamburger = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="hamburger">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={handleCheckboxChange} 
      />
      <svg viewBox="0 0 32 32">
        <path 
          className="line line-top-bottom" 
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path 
          className="line" 
          d="M7 16 27 16"
        ></path>
      </svg>
    </label>
  );
};

export const Header = () => {

    const handleTabClick = (tab: string) => {
        console.log(tab);
    };

    return (
        <nav className='header font-secondary'>
            <motion.div
                className='flex flex-1 items-start justify-start'
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 4 }}
            >
                <img src={logo} alt="logo" className="logo" onClick={() => handleTabClick('home')} />
            </motion.div>
            <div className='flex flex-1 items-end justify-end'>
                {/* <DockDemo /> */}
                <button className="boton-elegante">Contact</button>

                <Hamburger />
            </div>
        </nav>
    );
}

export default Header;