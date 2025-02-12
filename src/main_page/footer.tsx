import React from 'react';
import logo from '../assets/vertical-logof_white.png';


import { BsArrowUp, BsGeoAlt, BsCapslock, BsCursorFill } from "react-icons/bs";


const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className="flex flex-col p-5 bg-black/80 items-center justify-center text-white relative">
            <div className='flex flex-col md:flex-row justify-between w-full p-7'>
                <div className='flex flex-col py-7 items-center justify-center '>
                    <div className='py-2'>
                        <h1 className= 'text-6xl md:text-8xl font-primary'>Say Hello</h1>
                    </div>
                    <div className='py-2'>
                        <img className="w-[200px]" src={logo} alt="" />
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center '>
                    <div className='flex items-center space-x-8'>
                        {/* Form and Address Section */}
                        <div className='flex flex-col items-center text-3xl space-y-6 '>
                            {/* Form Section */}
                            <div>
                                <h2>Get In Touch..</h2>
                                <h4 className='text-[15px]'>Our team will get back to you shortly</h4>
                            <div className="relative mt-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    autoComplete="email"
                                    aria-label="Email address"
                                    className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                                />
                                <div className="absolute inset-y-1 right-1 flex justify-end">
                                    <button
                                        type="submit"
                                        aria-label="Submit"
                                        className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                                    >
                                        <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            </div>

                            {/* Address Section */}
                            <div className='flex items-center space-x-4'>
                                <BsGeoAlt className='text-5xl text-amber-300' />
                                <div className='flex flex-col text-xl'>
                                    <span>Address here</span>
                                    <span>410 N Paulina St</span>
                                    <span>UAE</span>
                                    <span>+119 773-282-2073</span>
                                    <span>0U9o0@example.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Arrow Icon */}
                        <div className="flex items-start justify-center">
                            <BsArrowUp
                                className="text-sm sm:text-6xl md:text-9xl cursor-pointer arrow-hover"
                                onClick={handleScrollToTop}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <h4 className='pl-7 '>© 2024, Hello Social</h4>


        </section>
    );
};

export default Footer;