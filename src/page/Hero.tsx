import React from "react";
import { motion } from "framer-motion";
import { Particles } from "../@/components/magicui/particles";
import { Safari } from "../@/components/magicui/safari";
import hero from "../assets/hero-img2.png"

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full flex flex-col items-center justify-center rounded-lg"
        >
            {/* Heading */}
            <div className="flex flex-col items-center justify-center mt-[30px] md:mt-[100px]">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center my-5 leading-tight text-white relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-white/90 to-gray-600 drop-shadow-lg">
                        SpotCard : The Future of <br /> Digital Business Networking
                    </span>
                </h1>

                <h4 className="text-xl md:text-2xl text-center my-5 text-gray-200 max-w-3xl mx-auto relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-white/80 to-gray-400 drop-shadow-md">
                        A Smart, Shareable, and Elegant Digital Business Card
                        <br /> Designed to Make Powerful First Impressions
                    </span>
                </h4>
                <button className="boton-elegante my-5">Know More</button>
            </div>

            {/* Glowing Effect Wrapper */}
            <div className="relative size-full max-w-[800px] mt-[30px] sm:px-2 md:px-0 z-10">
                {/* Safari Component with Gradient Mask */}
                <Safari
                    url="spotcard.in"
                    className="size-full"
                    style={{
                        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,1))",
                        maskImage: "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,1))"
                    }}
                    imageSrc={hero}
                />
                {/* Shadow Outside the Mask */}
                <div className="absolute inset-0 shadow-[0_-20px_70px_rgba(255,193,8,0.5)] pointer-events-none"></div>
            </div>

            {/* Particles */}
            <Particles
                className="absolute inset-0 z-0"
                quantity={500}
                ease={50}
                color={"#ffaa40"}
                refresh
                style={{
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,1))",
                    maskImage: "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,1))"
                }}
            />
        </section>
    );
};

export default Hero;