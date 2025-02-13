import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/horizontal-logo-white.png';
import ShinyButton from "../@/components/magicui/shiny-button";
import mockup from "../assets/mobile_mockup.png";
import { MdOutlineDoubleArrow } from "react-icons/md";


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
    setIsMenuOpen(false); // Close menu
  };

  return (
    <>
      <nav className="header font-secondary relative bg">
        {/* Logo */}
        <motion.div
          className={`flex flex-1 items-start justify-start transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', duration: 4 }}
        >
          {/* <img src={logo} alt="logo" className="logo min-w-[250px]" /> */}
        </motion.div>

        {/* Contact Button & Hamburger */}
        <div className="flex flex-1 items-end justify-end ">
          {/* Hide only Contact button */}
          <button
          onClick={() => window.location.href = 'tel:+919345035514'}
            className={`boton-elegante transition-opacity duration-300 hidden sm:block ${isMenuOpen ? 'opacity-0' : 'opacity-100'} `}
          >
            Contact
          </button>
          {/* Hamburger Icon */}
          <Hamburger onToggle={setIsMenuOpen} checked={isMenuOpen} />
        </div>
      </nav>

      {/* Fullscreen Navigation */}
      {isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white z-50 flex flex-col items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <section
            id="about"
            className="text-3xl py-10 flex items-center justify-center font-bold"
          >
            <div className="flex flex-1 flex-col items-center justify-center">
            <ul className="text-left font-spl3 text-3xl md:text-5xl lg:text-6xl 
               leading-relaxed md:leading-relaxed lg:leading-relaxed 
               font-black ml-10 cursor-pointer">
                                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'usecase', label: 'UseCase' },
                  { id: 'templates', label: 'Templates' },
                  {id: 'pricing', label: 'Pricing' },
                  { id: 'benefits', label: 'Benefits' },
                  { id: 'contact', label: 'Contact' },
                ].map(({ id, label }) => (
                  <motion.li
                    key={id}
                    className="flex items-center gap-4 hover:text-amber-300 transition-colors duration-300"
                    whileHover={{ x: -10 }}
                  >
                    <MdOutlineDoubleArrow />
                    <a onClick={() => scrollToSection(id)}>{label}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 hidden sm:block items-center justify-center">
              <img src={logo} className="w-[800px]" alt="" />
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
};

export default Header;