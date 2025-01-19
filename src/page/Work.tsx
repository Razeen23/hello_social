import React from 'react'

import { AnimatedListDemo } from "../page/AnimatedList";  // Adjust the import path

const Work = () => {
  return (
    <>
    <section className='container bg-white rounded text-black'>
    <div className='flex p-8'>
        <div className='flex heading'>
            <div className='flex flex-1 flex-col uppercase gap-16 text-6xl items-center justify-center'>
                <h1 className='text-5xl'>How BlueCards Helps Your Business</h1>
                <p className='text-[16px] leading-[20px]'>BlueCards simplifies business networking by offering a digital alternative to traditional business cards. It enables easy sharing via QR codes and links, reducing paper waste, and providing instant updates. This efficient, eco-friendly solution enhances professional connections, streamlining the process and improving engagement.
                </p> 
                <button className="boton-elegante ">Get in touch</button>   
            </div>
            <div className='flex flex-1 text-left items-start justify-start'>
              <AnimatedListDemo />
            </div>
        </div>

    </div>
    <hr className='w-full'></hr>

    </section>
    </>
  )
}

export default Work