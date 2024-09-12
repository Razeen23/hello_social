import React from 'react'
import card from '../assets/hellosocial_card_new.png'


const About = () => {
    return (
        <>
        <section className="text-3xl py-10 flex items-center justify-center font-bold">

            <div className='flex flex-1 items-center justify-center'>
                <img src={card} className="w-[800px]" alt="" />
            </div>
            <div className='flex flex-1 flex-col items-left justify-center'>
               <h3 className='text-[40px] py-14 text-left font-primary'> Who is hello social? </h3>
 
                <h6 className='text-[20px] text-left  font-secondary'>Hello Social is a dynamic and innovative company specializing in comprehensive marketing solutions and web development services. Our expertise spans across a wide array of digital services, including website development, e-commerce site creation, and other related works. We pride ourselves on delivering tailored solutions that drive growth and enhance online presence for businesses of all sizes.</h6>
            </div>
        </section>

</>
    )
}

export default About