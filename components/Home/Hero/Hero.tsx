"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen border items-center justify-center border-amber-500 flex text-white overflow-hidden">
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/s1.jpg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl mt-6 text-center font-bold tracking-wide "
        >
          Creating web products,
          <br /> brands,
          <span className="text-cyan-200"> and experiences. </span>{" "}
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi! I&apos;m Askebir - A Passionate{" "}
          <span>
            <Typewriter
              options={{
                strings: [
                  "Fronted Developer",
                  "Backend Developer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 30,
                wrapperClassName: " text-cyan-500 pl-2",
              }}
            />{" "}
          </span>
        </h2>
        <button
          ta-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
        >
          {" "}
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2  inline-block " />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
