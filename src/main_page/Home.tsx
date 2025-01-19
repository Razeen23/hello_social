"use client";

import React from 'react';
import TextRevealDemo from '../page/TextReveal';
import About from '../page/About';
import Card from '../page/Card';
import Work from '../page/Work';
import { cn } from "../@/lib/utils";
import DotPattern from "../@/components/magicui/dot-pattern";
import BlurFade from "../@/components/magicui/blur-fade";
import Benefits from '../page/Benefits';
import { Templates } from '../page/Templates';



const Home: React.FC = () => {
    return (
        <>
            <section className='min-h-screen flex flex-col items-center justify-center'>
                <div className='container min-h-[65vh] items-center justify-center flex flex-1'>
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                        )}
                    />
                    <div className='flex flex-1 min-w-[80%] text-center justify-center mb-[-10%]'>
                        <BlurFade delay={0.5} inView>
                            <h3 className='font-400 text-xl uppercase font-tertiary '>
                                Web Development & Digital Marketing
                            </h3>
                            <h2 className='font-400 text-[150px] text-amber-300 uppercase font-primary '>
                                Inno &nbsp;&nbsp;
                                <span className="love inline-block align-middle">
                                    <input id="switch" type="checkbox" />
                                    <label className="love-heart" htmlFor="switch">
                                        <i className="left"></i>
                                        <i className="right"></i>
                                        <i className="bottom"></i>
                                        <div className="round"></div>
                                    </label>
                                </span>
                                &nbsp;&nbsp; ative
                            </h2>
                            <h3 className='font-400 text-3xl uppercase font-tertiary '>
                                Transforming Ideas into Digital Reality
                            </h3>
                        </BlurFade>
                    </div>
                    <div className='flex flex-1 items-center justify-center mb-[-10%]'>
                        <div className="spinner">
                            <div className="spinner1"></div>
                        </div>
                    </div>
                </div>
                <div className="container min-h-[25vh] flex flex-1 text-amber-300 items-center justify-between text-5xl font-spl3">
                    <div className="flex-1 text-center">
                        DESIGN
                    </div>
                    <div>-</div>
                    <div className="flex-1 text-center">
                        DEVELOP
                    </div>
                    <div>-</div>
                    <div className="flex-1 text-center">
                        DEPLOY
                    </div>
                </div>
            </section>
            <TextRevealDemo />
            <Card />
            <About />
            {/* <Benefits /> */}
            <Work />
            <Templates />



        </>
    );
}

export default Home;