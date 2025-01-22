import Iphone15Pro from "../@/components/ui/iphone-15-pro";
import mockup from "../assets/t1.jpg";


const phoneData = [
  {
    id: 1,
    src: mockup,
    tem: "Template 1",
    des: "Description 1",
  },
  {
    id: 2,
    src: mockup,
    tem: "Template 2",
    des: "Description 2",
  },
  {
    id: 3,
    src: mockup,
    tem: "Template 3",
    des: "Description 3",
  },
  {
    id: 4,
    src: mockup,
    tem: "Template 4",
    des: "Description 4",
  },
  {
    id: 5,
    src: mockup,
    tem: "Template 5",
    des: "Description 5",
  },
  {
    id: 6,
    src: mockup,
    tem: "Template 6",
    des: "Description 6",
  },
];

export function Templates() {
  return (
    <section className="container relative bg-white rounded text-black mt-10">
      <div className="p-10">
      <h1 className="text-4xl truncate text-amber-300 font-primary font-bold p-5 " >
      Explore Our Templates
      </h1>
        <h4 className="text-2xl font-secondary text-amber-300 dark:text-white">
          Discover the perfect fit for your project.
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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