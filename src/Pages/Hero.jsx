import React from "react";
import heroImage from "../assets/heroImage.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-800 pt-20 pb-10 px-6 w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Text Section */}
      <div
        className="w-full md:w-2/3 text-white"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Suraj Chaudhary
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
          Full-Stack Web Developer | MERN Stack Enthusiast
        </h2>

        <p className="text-md md:text-xl text-gray-100 mb-4">
          I craft responsive, user-focused applications using modern tech like
          React, Node.js, and MongoDB.
        </p>

        <p className="text-gray-200 md:text-lg mb-6">
          Explore my work or let’s build something together!
        </p>

        <div className="flex gap-4">
          <Link to={'/projects'} className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md shadow-lg transition duration-300 ease-in-out">
            View Projects
          </Link>
          <a href="https://drive.google.com/file/d/12vyh9ZxhHIkadhbiZ52glkbO9M0lWptv/view?usp=drive_link" target="_blank" className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-md shadow-lg transition duration-300 ease-in-out">
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="w-full md:w-1/3 flex justify-center items-center mb-10 md:mb-0"
      >
        <img
          src={heroImage}
          alt="Suraj"
          className="w-[12rem] h-[15rem] sm:w-[18rem] sm:h-[20rem] md:w-[22rem] md:h-[26rem] object-cover shadow-2xl border-r-8 border-b-8 border-gray-700 transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
