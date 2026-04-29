"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Project from "./Project/Project";
import Skill from "./Skill/Skill";
import ClientReview from "./ClientReview/ClientReview";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");

      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overfow-hidden  ">
      <Hero />
      <Services />
      <Resume />
      <Project />
      <Skill />
      <ClientReview />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
