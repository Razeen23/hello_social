import TextReveal from "../@/components/magicui/text-reveal";
import { Meteors } from "../@/components/ui/meteors"; // Adjust the import path as needed
import RetroGrid from "../@/components/ui/retro-grid";


export function TextRevealDemo() {
  return (
    <div className=" relative z-10 flex min-h-[16rem] items-center justify-center rounded-lg font-secondary text-center">
    {/* <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"> */}
        {/* <h2 className="text-3xl font-bold text-white dark:text-black">hellllo</h2> */}
        {/* <div className="fixed inset-0 -z-10 pointer-events-none">
        <Meteors number={100} />
      </div> */}
            <RetroGrid />


      <TextReveal   text="BlueCards: Shareable, digital business cards for seamless, modern networking." />
    </div>
  );
}

export default TextRevealDemo;