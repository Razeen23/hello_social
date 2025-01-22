import React from 'react'
import card from '../assets/hellosocial_card_new.png'
import mockup from "../assets/mobile_mockup.png";



const About = () => {
    return (
        <>
        <section className="text-3xl py-10 flex items-center justify-center font-bold">

            <div className='flex flex-1 items-center justify-center'>
                <img src={mockup} className="w-[800px]" alt="" />
            </div>
            <div className='flex flex-1 flex-col items-right justify-center'>
               <h3 className='text-[40px] py-14 text-left font-primary'> Who is Blue Cards? </h3>
 
                <h6 className='text-[20px] text-left  font-secondary'>BlueCards is a platform offering digital business cards designed for seamless and eco-friendly networking. It enables users to share their contact details, services, and branding in a modern, interactive way.</h6>
            </div>
        </section>

</>
    )
}

export default About