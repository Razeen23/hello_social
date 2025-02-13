import React from 'react';
import card from '../assets/hellosocial_card_new.png';
import mockup from "../assets/mobile_mockup.png";

const About = () => {
    return (
        <section id='about' className="container min-h-fit text-3xl py-20 flex flex-wrap flex-colitems-center justify-center font-bold "
        >
            <div className='flex flex-1 items-center justify-center'>
                <img src={mockup} className="w-[800px] min-w-[300px] max-w-full" alt="Mockup" />
            </div>
            <div className='flex flex-1 flex-col items-right justify-center  text-center md:text-left min-w-[300px]'>
                <h3 className='text-[40px] py-10 font-primary'> What is SpotCard?</h3>
                <h6 className='text-[20px] font-secondary'>
                    SpotCard is a digital business card platform designed for smart, seamless, and eco-friendly networking. It allows users to instantly share their contact details, services, and brand through a modern, interactive, and professional digital card.
                </h6>
                <h3 className='text-[40px] pb-10 pt-14 font-primary leading-tight'> How SpotCard Helps Your Business Go Online ? </h3>
                <h6 className='text-[20px] font-secondary'>
                    SpotCard is a digital business card platform designed for smart, seamless, and eco-friendly networking.
                    It allows users to instantly share their contact details, services, and brand through a modern, interactive, and professional digital card.
                </h6>

            </div>
        </section>
    );
};

export default About;