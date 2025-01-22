import React from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "../@/components/magicui/magic-card"; // Adjust the import path as needed
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaSave, FaShareAlt, FaEdit, FaProductHunt, FaImages, FaYoutube, FaMoneyBillAlt, FaStar, FaUserPlus, FaChartBar } from "react-icons/fa";

const servicesGroup = () => {
    const services = [
        { icon: <FaPhone />, title: "Instant Call", description: "Let your customers reach you effortlessly with one tap." },
        { icon: <FaWhatsapp />, title: "WhatsApp Integration", description: "Directly connect via WhatsApp without saving numbers." },
        { icon: <FaEnvelope />, title: "Email Access", description: "Enable quick emailing in one click." },
        { icon: <FaMapMarkerAlt />, title: "Navigate Easily", description: "Use maps to guide visitors to your location." },
        // { icon: <FaSave />, title: "Save Contacts", description: "Allow users to save details to their phonebook." },
        { icon: <FaShareAlt />, title: "Unlimited Sharing", description: "Share your card infinitely via social platforms." },
        // { icon: <FaEdit />, title: "Effortless Updates", description: "Modify your card details anytime." },
        { icon: <FaProductHunt />, title: "Showcase Products", description: "Highlight up to 15 products or services." },
        { icon: <FaImages />, title: "Visual Gallery", description: "Display up to 20 images related to your business." },
        { icon: <FaYoutube />, title: "Video Features", description: "Add YouTube videos to captivate clients." },
        // { icon: <FaMoneyBillAlt />, title: "Simplified Payments", description: "Include payment options and QR codes." },
        { icon: <FaStar />, title: "Customer Feedback", description: "Let users review and rate your business." },
        // { icon: <FaUserPlus />, title: "Lead Generation", description: "Capture leads with an integrated inquiry form." },
        // { icon: <FaChartBar />, title: "Visitor Analytics", description: "Track how many people have viewed your card." },
    ];

    return services;
};

export function Work() {
    const { theme } = useTheme();
    const services = servicesGroup();

    return (
        <>
            <h1 className="text-4xl truncate text-amber-300 font-primary font-bold p-10">
            Limitless possibilities with just one digital card.
            </h1>
            <section className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <MagicCard
                        key={index}
                        className="cursor-pointer flex flex-col text-center items-center justify-center shadow-2xl p-4 whitespace-normal text-3xl overflow-hidden rounded-xl bg-white/10 dark:bg-black/10"
                        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                        style={{ width: "200px", height: "100px" }} // Ensuring width is 2X height
                    >
                        <div className="flex items-center justify-center  mb-2">
                            {React.cloneElement(service.icon, { className: " object-cover mb-2", size: "3rem", color: "#FFC107" })}
                        </div>
                        <h2 className="text-xl truncate text-amber-300 font-secondary font-bold">
                            {service.title}
                        </h2>
                        <h4 className="truncate text-wrap text-[16px]">{service.description}</h4>
                    </MagicCard>
                ))}
            </section>
        </>
    );
}

export default Work;