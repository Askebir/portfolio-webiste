import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Project from "./Project/Project";
import Skill from "./Skill/Skill";
import ClientReview from "./ClientReview/ClientReview";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

const Home = () => {
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
