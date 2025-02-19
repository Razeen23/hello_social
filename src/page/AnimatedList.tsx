"use client";
import { cn } from "../@/lib/utils";
import { AnimatedList } from "../@/components/ui/animated-list"; 
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Boost Your Brand",
    description: "Showcase your products, services, and expertise in a professional digital format.",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Simplify Sharing",
    description: "Share your information seamlessly with clients and colleagues via QR codes or links.",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Save Time",
    description: "Create your digital card in minutes with easy-to-use tools.",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Eco-Friendly Solution",
    description: "Ditch paper cards and embrace a sustainable, digital alternative.",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Engage Customers",
    description: "Keep your audience connected with instant updates and interactive features.",
    time: "2m ago",
    icon: "🗞️",
    color: "#7143f0",
  },
  {
    name: "Direct Contact in One Click",
    description: "Let customers call, WhatsApp, or email you instantly without saving your number.",
    time: "2m ago",
    icon: "📞",
    color: "#20993e",
  },
];

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <motion.figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[700px] cursor-pointer overflow-hidden rounded-2xl p-3",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-black/10 backdrop-blur-md [border:1px_solid_rgba(0,0,0,.05)] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="font-secondary flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </motion.figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Start animation when 20% of the section is visible
  });

  return (
    <div ref={ref} className={cn("flex h-fit w-full flex-col p-6 overflow-hidden", className)}>
      {inView && ( // Only render animation when inView is true
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      )}
    </div>
  );
}