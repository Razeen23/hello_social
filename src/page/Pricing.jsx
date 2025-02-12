import React from "react";

const pricingPlans = [
  {
    title: "6 Months Plan",
    price: "₹299",
    dayprice: "₹1.7",
    duration: "6 Months",
    features: [
      "Unlimited Digital Card Updates",
      "Unlimited Social Media Sharing",
      "14 Image Gallery + 3 YouTube Videos",
      "Professional Design Templates",
      "Integrated Payment System",
      "Visitor Tracking & Analytics",
      "QR Code for Instant Sharing",
      "Direct Call & WhatsApp Button",
    ],
    length: 3 ,

  },
  {
    title: "12 Months Plan",
    price: "₹549",
    dayprice: "₹1.5",
    duration: "12 Months",
    features: [
      "Unlimited Digital Card Updates",
      "Unlimited Social Media Sharing",
      "20 Image Gallery + 5 YouTube Videos",
      "Professional Design Templates",
      "Integrated Payment System",
      "Visitor Tracking & Analytics",
      "QR Code for Instant Sharing",
      "Direct Call & WhatsApp Button",
      "SEO-Optimized Digital Card",
      "Auto-Slideshow for Gallery Images",
      "Business Branding Consultation",

    ],
    length: 4 ,

  },
  {
    title: "24 Months Plan",
    price: "₹999",
    dayprice: "₹1.3",
    duration: "24 Months",
    features: [
      "Unlimited Digital Card Updates",
      "Unlimited Social Media sharing",
      "30 Image Gallery + 8 YouTube Videos",
      "Professional Design Templates",
      "Integrated Payment System",
      "Visitor Tracking & Analytics",
      "QR Code for Instant Sharing",
      "Direct Call & WhatsApp Button",
      "SEO-Optimized Digital Card",
      "Increased Storage for Media",
      "Auto-Slideshow for Gallery Images",
      "Business Branding Consultation",
      // "AI-Powered Social Media Assistance",
      "Email & SMS Marketing Integration",
    ],
    length: 5 ,
  },
];

const Pricing = () => {
  return (
    <section className="md:container py-10 bg-white min-h-[70%]">
      <h1 className="text-5xl truncate text-black font-primary font-bold ">
        Pricing List
      </h1>
      <div className="pricing-wrapper text-wrap">
        {pricingPlans.map((plan, index) => (
          <div className="font-secondary rounded-2xl p-5 bg-blue-500 shadow">
            <div key={index} className=" max-w-[220px]  px-5 py-10 ">
              <p className="text-center text-2xl font-bold text-white">{plan.title}</p>

              <h5 className="mt-4 text-center text-sm font-normal text-gray-400">
                <h5 className="text-lg">Spend <span className="text-white font-bold">  {plan.dayprice}  </span> per day to grow your business</h5>
              </h5>

              <div className="mt-5 flex justify-center text-white">
                <div className="text-6xl font-medium text-yellow-500">{plan.price}</div>
                <div className="ml-2 flex flex-col">
                  <p className="text-lg font-bold">For</p>
                  <p>{plan.duration}</p>
                </div>
              </div>

              <div className="ml-3 mt-8">
              <ul className="mt-6 space-y-6 text-white">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                                        <svg
                        className={`mr-3 h-4 w-4 fill-current ${index < plan.length ? 'text-green-400' : 'text-gray-400'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z" />
                      </svg>
                       <span className="ml-20">{feature}</span>
                </li>
              ))}
            </ul>

              </div>

              <div className="mt-5 text-white text-center">
  <p className="text-lg font-bold">
    Spend more <spam className="text-yellow-500 text-2xl" >₹150</spam> to get <br /> a Personalized Designer
  </p>
  <p className="text-sm text-gray-300">(One-time payment) Fully optional</p>
</div>


              <div className="mt-8">
              <button className="boton-elegante mt-4">Talk with our expert</button>

              </div>
            </div>
          </div>
        ))}
      </div>



    </section>

  );
};

export default Pricing;