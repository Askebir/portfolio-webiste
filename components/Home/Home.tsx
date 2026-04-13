import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Project from "./Project/Project";

const Home = () => {
  return (
    <div className="overfow-hidden  ">
      <Hero />
      <Services />
      <Resume />
      <Project />
    </div>
  );
};

export default Home;
