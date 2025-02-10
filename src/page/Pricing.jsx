import React from "react";

const pricingPlans = [
    {
      title: "6 Months Plan",
      price: "₹299",
      duration: "6 Months",
      features: [
        "Unlimited Digital Card Updates",
        "Unlimited Social Media Posters",
        "20 Image Gallery + 5 YouTube Videos",
        "Professional Design Templates",
        "Integrated Payment System",
        "Visitor Tracking & Analytics",
        "QR Code for Instant Sharing",
        "Direct Call & WhatsApp Button",
        "Multilingual Support",
      ],
    },
    {
      title: "12 Months Plan",
      price: "₹549",
      duration: "12 Months",
      features: [
        "Everything in 6 Months Plan",
        "Priority Customer Support",
        "Exclusive Premium Templates",
        "Advanced Analytics Dashboard",
        "SEO-Optimized Digital Card",
        "Increased Storage for Media",
        "Business Branding Tools & Logo Customization",
        "Auto-Slideshow for Gallery Images",
        "Lead Generation Form & Customer Inquiry Management",
      ],
    },
    {
      title: "24 Months Plan",
      price: "₹999",
      duration: "24 Months",
      features: [
        "Everything in 12 Months Plan",
        "Business Branding Consultation",
        "Enhanced Personalization Features",
        "AI-Powered Social Media Assistance",
        "Auto-Generated Marketing Posters",
        "Higher Storage for Images & Videos",
        "E-Commerce Storefront Integration",
        "Email & SMS Marketing Integration",
        "UPI & Multiple Payment Gateway Support",
        "Custom Domain Mapping Option",
      ],
    },
  ];

const Pricing = () => {
  return (
    <section className="md:container py-10 bg-white min-h-[70%]">
      <h1 className="text-4xl truncate text-black font-primary font-bold pb-10">
        Pricing
      </h1>
      <div className="pricing-wrapper">
        {pricingPlans.map((plan, index) => (
          <div className="card" key={index}>
            <div className="card__border" />
            <div className="card_title__container">
              <span className="card_title">{plan.title}</span>
              <p className="card_price">{plan.price}</p>
              <p className="card_duration">{plan.duration}</p>
            </div>
            <hr className="line" />
            <ul className="card__list">
              {plan.features.map((feature, featureIndex) => (
                <li className="card__list_item" key={featureIndex}>
                  <span className="check">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="check_svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="list_text">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="button">Get Started</button>
          </div>
        ))}
      </div>
      
      
    </section>
    
  );
};

export default Pricing;