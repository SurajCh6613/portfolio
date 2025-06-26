import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
};

export default Home;
