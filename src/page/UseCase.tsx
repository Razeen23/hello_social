import React from "react";
import { useInView } from 'react-intersection-observer';
import Countup from 'react-countup';
import { motion } from 'framer-motion';

import { FaRegAddressCard } from "react-icons/fa6";
import { RiSlideshow3Fill, RiProjector2Fill } from "react-icons/ri";
import { SiWebpack } from "react-icons/si";
import vector from "../assets/vector.png";
// import vector from "../assets/animate-img2.gif";




const UseCase = () => {
    const { ref: countUpRef, inView: countUpIsVisible } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.3, // Trigger when 30% of the element is visible
    });
    const { ref: countUpRef2, inView: countUpIsVisible2 } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.2, // Trigger when 30% of the element is visible
    });
    return (
        <div>
            <section className='min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center '>
                <div className="relative font-secondary">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                            <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center">
                                <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                    {/* <img className="w-auto h-full" src={pattern} alt="" /> */}
                                </div>
                                <div className="text-center lg:text-left">
                                    <h1 className="text-2xl font-bold leading-tight sm:text-xl sm:leading-tight lg:leading-tight lg:text-4xl font-pj text-shadow-xl">
                                        Transform your business card into an innovative digital vCard!
                                    </h1>
                                    <p className="mt-2 text-lg  sm:mt-8">
                                        A digital vCard allows you to easily share personal or business details via a single link, functioning like a mini website for your business. Perfect for small business owners, it doubles as a sleek product/service catalog and can even serve as an e-commerce platform. Elegant, affordable, and easily updated, this solution eliminates the need for reprinting traditional business cards.                                    </p>
                                </div>
                                <div ref={countUpRef2} className="flex text-left items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                    <div className="flex items-center">
                                        {/* <p className="text-3xl font-medium  sm:text-4xl">{countUpIsVisible2 && <Countup start={0} end={20} duration={4} />}+</p>

                                        <p className="ml-3 text-sm">Quality<br />Checks</p> */}
                                        <ul className="text-3xl font-medium sm:text-4xl">
                                            <li className="flex items-center">
                                                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
                                                    <FaRegAddressCard className="text-lg" />
                                                </div>

                                                <p className="ml-1 p-2 text-sm">Virtual Business Card</p>
                                            </li>
                                            <li className="flex items-center">
                                                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
                                                    <RiSlideshow3Fill className="text-lg" />
                                                </div>

                                                <p className="ml-1 p-2 text-sm">Professional Profile Showcase</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hidden sm:block">
                                        <svg className="" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                        </svg>
                                    </div>
                                    <div className="flex items-center">
                                        <ul className="text-3xl font-medium sm:text-4xl">
                                            <li className="flex items-center">
                                                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
                                                    <SiWebpack className="text-lg" />
                                                </div>
                                                <p className="ml-3 p-2 text-sm">Compact Web Presence</p>
                                            </li>
                                            <li className="flex items-center">
                                                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
                                                    <RiProjector2Fill className="text-lg" />
                                                </div>
                                                <p className="ml-3 p-2 text-sm">Product/Service Showcase</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 className="mt-2 text-xl sm:mt-8">
                                    Upgrade your business communication today!
                                </h3>
                            </div>
                            <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                                {/* <img src={imgSrc2} alt="" /> */}
                                <img className="w-full" src={vector} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UseCase;






