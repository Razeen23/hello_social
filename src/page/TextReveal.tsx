import TextReveal from "../@/components/magicui/text-reveal";

export function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg font-secondary bg-black dark:bg-white text-center">
        {/* <h2 className="text-3xl font-bold text-white dark:text-black">hellllo</h2> */}
      <TextReveal text="BlueCards: Shareable, digital business cards for seamless, modern networking." />
    </div>
  );
}

export default TextRevealDemo;