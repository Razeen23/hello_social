import React from "react";
import { useInView } from 'react-intersection-observer';
// import Countup from 'react-countup';
// import { motion } from 'framer-motion';

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
        // <div>
        <section className=' md:container my-10 min-h-[100vh] lg:min-h-[100vh] flex justify-center items-center '>
            <div className="relative font-secondary">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 sm:py-6">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8 items-center">
                        <div className="relative lg:flex lg:flex-col lg:items-start lg:justify-center lg:text-left">
                            <div className="absolute bottom-0 left-0 overflow-hidden lg:inset-y-0">
                                {/* <img className="w-auto h-full" src={pattern} alt="img" /> */}
                            </div>
                            <div className="text-center  lg:text-left">
                                <h1 className="text-2xl font-bold leading-tight sm:text-2xl sm:leading-tight lg:leading-tight lg:text-4xl font-primary text-shadow-xl">
                                    Upgrade Your Business Card with a Smart Digital vCard!
                                </h1>
                                <p className="mt-2 text-xl  sm:mt-10">
                                    Ditch traditional business cards and embrace a smarter, more dynamic way to share your details. A digital vCard acts as your mini website, allowing you to showcase your business, services, and contact information all in one link.
                                </p>
                            </div>
                            <div
                                ref={countUpRef2}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 items-center justify-center"
                            >
                                <ul className="text-xl font-medium space-y-6">
                                    <li className="flex items-center">
                                        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
                                            <FaRegAddressCard className="text-lg" />
                                        </div>
                                        <p className="ml-3">Virtual Business Card</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
                                            <RiSlideshow3Fill className="text-lg" />
                                        </div>
                                        <p className="ml-3">Professional Profile Showcase</p>
                                    </li>
                                </ul>

                                <ul className="text-xl font-medium space-y-6">
                                    <li className="flex items-center">
                                        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
                                            <SiWebpack className="text-lg" />
                                        </div>
                                        <p className="ml-3">Compact Web Presence</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
                                            <RiProjector2Fill className="text-lg" />
                                        </div>
                                        <p className="ml-3">Product/Service Showcase</p>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="mt-2 text-xl sm:mt-8">
                                🚀 Stop wasting money on paper cards – Go digital, reach more customers, and grow your business effortlessly.
                            </h3>
                        </div>
                        <div className="relative max-w-full mx-auto lg:ml-auto lg:max-w-[800px]">
                            {/* <img src={imgSrc2} alt="img" /> */}
                            <img className="w-full" src={vector} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // </div>
    );
};

export default UseCase;






