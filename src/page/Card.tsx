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
      header: 'Custom Approach',
      description: 'We solve real business problems with custom-tailored tech solutions.'
    },
    {
      img: img2,
      header: 'Data-driven Development',
      description: 'We create tech products that are data-driven and market-conscious.'
    },
    {
      img: img3,
      header: 'Cutting-edge Tech',
      description: 'Every project at Think To Share is an opportunity for us to chase innovation.'
    },
    {
      img: img4,
      header: 'Scalable Solutions',
      description: 'Our business solutions never stand in the way of your business growth.'
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
        className="cursor-pointer flex flex-col text-left items-center justify-center shadow-2xl p-4 whitespace-normal text-3xl overflow-auto"
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