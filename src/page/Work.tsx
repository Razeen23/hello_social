import React from 'react'

const Work = () => {
  return (
    <>
    <section className='container min-h-screen items-center justify-center bg-white rounded text-black'>
    <div className='flex p-14'>
        <div className='flex heading'>
            <div className='flex flex-1 flex-col uppercase gap-16 text-6xl font-primary items-start justify-start'>
                <div className='text-6xl'>how we perform</div> 
                <button className="boton-elegante ">Get in touch</button>   
            </div>
            <div className='flex flex-1 text-right items-end justify-end'>We manage your projects using well-adjusted agile techniques to efficiently manage your projects and reinforce collaboration between all parties involved, helping to achieve much faster time-to-market and slice through any market challenges.</div>
        </div>

    </div>
    <hr className='w-full'></hr>

    </section>
    </>
  )
}

export default Work