import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Project from "../sections/Project";
import Contact from "../sections/Contact";
import Copyright from "../layouts/Copyright";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Copyright />
    </>
  );
};

export default Home;
