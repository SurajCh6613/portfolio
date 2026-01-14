import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
