import Iphone15Pro from "../@/components/ui/iphone-15-pro";
import mockup from "../assets/t1.jpg";


const phoneData = [
  {
    id: 1,
    src: mockup,
    tem: "Classic Business Card",
    des: "Professionals, Corporates, Freelancers",
  },
  {
    id: 2,
    src: mockup,
    tem: "Modern Digital Card",
    des: "Digital Marketers, Startups, Creative Professionals",
  },
  {
    id: 3,
    src: mockup,
    tem: "Minimalist Design",
    des: "Designers, Architects, Consultants",
  },
  {
    id: 4,
    src: mockup,
    tem: "Social Media Influencer Card",
    des: "Influencers, Content Creators, YouTubers",
  },
  {
    id: 5,
    src: mockup,
    tem: "E-Commerce or Product Showcase Card",
    des: "Small Business Owners, Shopkeepers, Online Sellers",
  },
  {
    id: 6,
    src: mockup,
    tem: "Personal Brand & Portfolio Card",
    des: "Artists, Photographers, Developers, Writers",
  },
  {
    id: 7,
    src: mockup,
    tem: "Corporate & Appointment Booking Card",
    des: "Doctors, Lawyers, Consultants, Service Providers",
  },
  {
    id: 8,
    src: mockup,
    tem: "Restaurant & Food Business Card",
    des: "Cafes, Restaurants, Food Delivery Services",
  },
  // {
  //   id: 9,
  //   src: mockup,
  //   tem: "Tech & IT Consultant Card",
  //   des: "Software Developers, IT Consultants, Tech Startups",
  // },
  // {
  //   id: 10,
  //   src: mockup,
  //   tem: "Wedding & Event Planner Card",
  //   des: "Wedding Planners, Event Managers, DJs, Photographers",
  // },
  // {
  //   id: 11,
  //   src: mockup,
  //   tem: "Doctors, Dentists, Therapists, Nutritionists",
  //   des: "Doctors, Lawyers, Consultants, Service Providers",
  // },
  // {
  //   id: 12,
  //   src: mockup,
  //   tem: "Legal & Finance Consultant Card",
  //   des: "Lawyers, Accountants, Tax Advisors",
  // },
];

export function Templates() {
  return (
    <section id="templates"  className="md:container relative bg-white-bg rounded text-black mt-10">
      <div className="p-10">
      <h1 className="text-4xl  text-black font-primary font-bold p-5 " >
      Explore Our Templates
      </h1>
        <h4 className="text-2xl font-secondary text-black dark:text-white">
          Discover the perfect fit for your project.
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {phoneData.map((phone) => (
            <div key={phone.id} className="flex flex-col items-center">
              <Iphone15Pro
                className="max-w-[230px] h-[480px] mx-auto"
                src={phone.src}
              />
              <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
                {phone.tem}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {phone.des}
              </p>
              <button className="boton-elegante mt-4">Get in touch</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}