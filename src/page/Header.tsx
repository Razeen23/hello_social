import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/horizontal-logo-white.png';
import ShinyButton from "../@/components/magicui/shiny-button";

// Hamburger Component
const Hamburger = ({ onToggle, checked }: { onToggle: (isOpen: boolean) => void, checked: boolean }) => {
  const handleCheckboxChange = () => {
    onToggle(!checked); // Trigger state change in parent
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close menu and reset hamburger
  };

  return (
    <>
      <nav className="header font-secondary relative">
        <motion.div
          className="flex flex-1 items-start justify-start"
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 4 }}
        >
          <img src={logo} alt="logo" className="logo" />
        </motion.div>
        <div className="flex flex-1 items-end justify-end">
          <button className="boton-elegante">Contact</button>
          <Hamburger onToggle={setIsMenuOpen} checked={isMenuOpen} />
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white z-50 flex flex-col items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 0 }}
        >
          <ul className="text-left font-spl3 text-5xl leading-[5rem] font-black ml-12 cursor-pointer">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('use-case')}>UseCase</a></li>
            <li><a onClick={() => scrollToSection('templates')}>Templates</a></li>
            <li><a onClick={() => scrollToSection('benefits')}>Benefits</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </motion.div>
        

      )}
    </>
  );
};

export default Header;