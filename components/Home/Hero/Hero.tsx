"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="relative h-screen border items-center justify-center border-amber-500 flex text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/s1.jpg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
        />
        <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl mt-6 text-center font-bold tracking-wide ">
          Creating web products,
          <br /> brands,
          <span className="text-cyan-200"> and experiences. </span>{" "}
        </h1>
        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Hi! I'm Askebir - A Passionate{" "}
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
                wrapperClassName: " text-red-500 pl-2",
              }}
            />{" "}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
