import Iphone15Pro from "../@/components/ui/iphone-15-pro";

const phoneData = [
  {
    id: 1,
    src: "https://via.placeholder.com/430x880",
    tem: "Template 1",
    des: "Description 1",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/400x800",
    tem: "Template 2",
    des: "Description 2",
  },
  {
    id: 3,
    src: "https://via.placeholder.com/390x780",
    tem: "Template 3",
    des: "Description 3",
  },
  {
    id: 4,
    src: "https://via.placeholder.com/390x780",
    tem: "Template 4",
    des: "Description 4",
  },
  {
    id: 5,
    src: "https://via.placeholder.com/390x780",
    tem: "Template 5",
    des: "Description 5",
  },
  {
    id: 6,
    src: "https://via.placeholder.com/390x780",
    tem: "Template 6",
    des: "Description 6",
  },
];

export function Templates() {
  return (
    <section className="container relative bg-white rounded text-black mt-10">
      <div className="p-10">
        <h2 className="text-3xl font-bold text-black dark:text-white">
          Explore Our Templates
        </h2>
        <h4 className="text-2xl font-medium text-black dark:text-white">
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