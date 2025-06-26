import React from "react";
import heroImage from "../assets/heroImage.png";
const Hero = () => {
  return (
    <section className="bg-gradient-to-l from-gray-800 to-gray-400 pt-20 w-full h-full flex flex-col-reverse md:flex-row py-3 px-2">
      <div className="w-full md:w-2/3 h-full pl-2 pt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6">
          Hi, I'm Suraj Chaudhary{" "}
        </h1>
        <div className="text-xl md:text-3xl mb-6">
          Full-Stack Web Developer | MERN Stack Enthusiast
        </div>
        <p className="text-md md:text-2xl text-gray-700 mb-6 md:pr-6">
          I craft responsive, user-focused applications using modern
          technologies like React, Node.js, and MongoDB. Passionate about
          building clean, scalable code and solving real-world problems with
          intuitive solutions.
        </p>
        <p className="text-gray-700 md:text-xl mb-6">
          Explore my work or let’s build something together!
        </p>
        <div className=" space-x-2 mb-6">
          <button className="btn btn2">View projects</button>
          <button className="btn">Download Resume</button>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className="flex justify-center items-center">
          <img src={heroImage} alt="" className="w-[30rem] h-[30rem] " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
