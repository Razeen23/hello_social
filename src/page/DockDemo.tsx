import React from "react";

import { Dock, DockIcon } from "../@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="relative ">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-white/60 dark:bg-white/10 p-3">
          <Icons.home className="size-full" />
        </DockIcon>
        <DockIcon className="bg-white/60 dark:bg-white/10 p-3">
          <Icons.about className="size-full" />
        </DockIcon>
        <DockIcon className="bg-white/60 dark:bg-white/10 p-3">
          <Icons.product className="size-full" />
        </DockIcon>
        <DockIcon className="bg-white/60 dark:bg-white/10 p-3">
          <Icons.contact className="size-full" />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
    home: (props: IconProps) => (
        <svg viewBox="0 0 64 64" {...props}>
          <path
            fill="currentColor"
            d="M32 2.133L2.133 32h9.6v30h15.6V42.267h9.334V62h15.6V32h9.6z"
          />
        </svg>
      ),
      about: (props: IconProps) => (
        <svg viewBox="0 0 64 64" {...props}>
          <circle cx="32" cy="32" r="30" fill="currentColor" />
          <path fill="#fff" d="M32 45.333A5.333 5.333 0 1032 34.667 5.333 5.333 0 0032 45.333zm0-26.666c-3.682 0-6.667-2.985-6.667-6.667S28.318 5.333 32 5.333s6.667 2.985 6.667 6.667S35.682 18.667 32 18.667z" />
        </svg>
      ),
      product: (props: IconProps) => (
        <svg viewBox="0 0 64 64" {...props}>
          <path
            fill="currentColor"
            d="M4 14l28-10 28 10v36L32 60 4 50z"
          />
          <path fill="#fff" d="M32 42a5 5 0 100-10 5 5 0 000 10zm-6-16h12v6H26z" />
        </svg>
      ),
      contact: (props: IconProps) => (
        <svg viewBox="0 0 64 64" {...props}>
          <path
            fill="currentColor"
            d="M32 4C17.641 4 6 15.641 6 30c0 9.793 6.293 18.155 15.086 21.618L14 60l12.434-4.964A26.113 26.113 0 0032 58c14.359 0 26-11.641 26-26S46.359 4 32 4zm0 46a23.894 23.894 0 01-8.355-1.516l-1.813-.725-7.196 2.877 2.68-7.521-.764-1.755A23.923 23.923 0 118.667 30C8.667 17.246 18.667 8 32 8s23.333 9.246 23.333 22S45.333 52 32 52z"
          />
        </svg>
      ),
    };
    

export default DockDemo