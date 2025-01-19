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
      description: 'Expand your business online with BlueCards—a simple, professional way to share your services and connect digitally.'
    },
    {
      img: img2,
      header: 'Digital Marketers',
      description: 'Streamline campaigns by centralizing your social links and services. BlueCards works great as a landing page for maximum impact.'
    },
    {
      img: img3,
      header: 'Influencers',
      description: 'Showcase your brand, achievements, and content effortlessly. BlueCards is the perfect addition to your social bio.'
    },
    {
      img: img4,
      header: 'Professionals',
      description: 'Upgrade from traditional cards to a sleek digital solution. BlueCards represents your expertise with ease and style.'
    },
  ];

  return services;
}

export function Card() {
  const { theme } = useTheme();
  const services = servicesGroup();

  console.log(theme);

  return (
    <>
    <h1 className="text-4xl truncate text-amber-300 font-primary font-bold pb-10">Who Needs Digital Visting Card.?</h1>
    <section className="container flex h-[350px] flex-col w-full gap-4 lg:h-[350px] lg:flex-row">
      {services.map((service, index) => (
        <MagicCard
        key={index}
        className="cursor-pointer flex flex-col text-left items-center justify-center shadow-2xl p-4 whitespace-normal text-3xl overflow-hidden rounded-xl bg-white/10 dark:bg-black/10"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img src={service.img} className="w-20 h-20 object-cover mb-2" />
        <h2 className="text-xl truncate text-amber-300 font-secondary font-bold">{service.header}</h2>
        <h4 className="truncate text-wrap text-[16px]">{service.description}</h4>
      </MagicCard>
      ))}
    </section>
    </>
  );
}

export default Card;