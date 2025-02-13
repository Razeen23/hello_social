"use client";
import { useInView } from "react-intersection-observer";
import { AnimatedListDemo } from "../page/AnimatedList"; 

const Work = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the section is visible
  });

  return (
    <section id="usecase" ref={ref} className='md:container min-w-[300px] sm:min-w-[450px] min-h-fit bg-white-bg rounded text-black'>
      <div className='flex p-3  md:p-8 '>
        <div className='flex heading flex-wrap'>
          <div className='flex flex-1 flex-col uppercase gap-4 text-left items-start justify-center'>
            <h1 className='text-xl md:text-3xl font-primary sm:text-center'>Why Stick to Paper Business Cards?</h1>
            <ul className='text-[14px] md:text-[18px] font-secondary leading-8'>
              <li className="font-bold"> Many small business owners and shopkeepers waste money printing business cards that often:</li>
              <li> ❌ Get lost or thrown away before they even bring results.</li>
              <li> ❌ Need reprinting every time you update contact details.</li>
              <li> ❌ Can’t be easily shared online with customers.</li>
              <li> ❌ Offer zero tracking—you never know if someone actually checks them.</li>
            </ul>
            <h1 className='text-xl md:text-3xl font-primary sm:text-center'>The Smarter Alternative? SpotCard!</h1>
            <ul className='text-[14px] md:text-[18px] leading-8 font-secondary'>
              <li> ✅ One-Time Customization Fee - Just ₹150 (No need to reprint!)</li>
              <li> ✅ Saves You Money – Costs as low as ₹1.38 per day.</li>
              <li> ✅ Instant Updates – Change details anytime without extra charges.</li>
              <li> ✅ Unlimited Sharing – Share via QR code, WhatsApp, or social media.</li>
              <li> ✅ Track Visitors & Get More Leads – Know who views your card & follow up easily.</li>
            </ul>
          </div>
          <div className='flex flex-1 text-left  items-center justify-center'>
            <AnimatedListDemo />
          </div>
        </div>
      </div>
      <hr className='w-full'></hr>
    </section>
  );
};

export default Work;