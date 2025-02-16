import { useTheme } from "next-themes";
import { MagicCard } from "../@/components/magicui/magic-card"; // Adjust the import path as needed
import img1 from '../assets/card1.png';
import img2 from '../assets/card6.png';
import img3 from '../assets/card3.png';
import img4 from '../assets/card5.png';

const servicesGroup = () => {
  const services = [
    {
      img: img1,
      header: 'Small Business Owners',
      description: 'Expand your business online with SpotCard—a simple and professional way to share your services and connect digitally.'
    },
    {
      img: img2,
      header: 'Digital Marketers',
      description: 'Streamline your campaigns by centralizing social links and services. SpotCard works as a powerful landing page for maximum impact.'
    },
    {
      img: img3,
      header: 'Influencers',
      description: 'Showcase your brand, achievements, and content effortlessly. SpotCard is the perfect addition to your social bio.'
    },
    {
      img: img4,
      header: 'Professionals',
      description: 'Upgrade from traditional business cards to a sleek digital solution. SpotCard enhances your professional image with ease and style.'
    },
  ];

  return services;
}

export function Card() {
  const { theme } = useTheme();
  const services = servicesGroup();

  console.log(theme);

  return (
<section className="w-full flex flex-col items-center justify-center min-h-fit py-24">
<h1 className="text-2xl md:text-4xl truncate text-amber-300 font-primary font-bold pb-10">Who Needs Digital Visting Card.?</h1>
    <div className="container sm:mx-2 flex min-h-[350px] flex-col w-full gap-4 lg:h-[350px] lg:flex-row">
      {services.map((service, index) => (
        <MagicCard
        key={index}
        className="cursor-pointer flex flex-col text-left items-center justify-center shadow-2xl p-4 whitespace-normal text-3xl overflow-hidden rounded-xl bg-white/10 dark:bg-black/10"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img src={service.img} className="w-20 h-20 object-cover mb-2" alt="img" />
        <h2 className="text-xl truncate text-amber-300 font-secondary font-bold">{service.header}</h2>
        <h4 className="truncate text-wrap text-[16px]">{service.description}</h4>
      </MagicCard>
      ))}
    </div>
    </section>
  );
}

export default Card;