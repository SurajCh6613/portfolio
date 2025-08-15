import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 px-6 bg-gray-700 text-white w-full">
      <h2
        className="text-4xl font-extrabold mb-10 text-center"
      >
        About Me
      </h2>

      <div className="space-y-6 text-lg px-6">
        <p>
          I’m <strong className="text-yellow-300">Suraj Chaudhary</strong>, a
          passionate Full-Stack Web Developer skilled in the{" "}
          <span className="text-yellow-300 font-semibold">MERN stack</span> and
          backend development.
        </p>
        <p>
          I recently completed my B.Tech at{" "}
          <strong className="text-yellow-300">
            Dr. APJ Abdul Kalam Technical University
          </strong>
          . My projects include{" "}
          <span className="text-yellow-300 font-semibold">ReferrLink</span>,{" "}
          <span className="text-yellow-300 font-semibold">
            AI-Powered Code Reviewer
          </span>
          , <span className="text-yellow-300 font-semibold">Task Manager</span>,
          and a{" "}
          <span className="text-yellow-300 font-semibold">
            Doctor Appointment Platform
          </span>
          .
        </p>
        <p>
          I’ve solved <span className="text-yellow-300 font-bold">260+</span>{" "}
          problems on LeetCode and{" "}
          <span className="text-yellow-300 font-bold">200+</span> on CodeChef —
          sharpening my algorithmic thinking and problem-solving skills.
        </p>
        <p>
          Beyond coding, I enjoy exploring new JavaScript tools, participating
          in coding contests, and contributing to open-source projects.
        </p>
      </div>

      <ul className="mt-10 space-y-3 text-base sm:text-lg px-6">
        <li>
          🎯 <span className="font-semibold">Tech Stack:</span> React, Node.js,
          Express, MongoDB, Java, MySQL, Tailwind CSS, Git
        </li>
        <li>
          🏆 <span className="font-semibold">Highlights:</span> Java Coding
          Competition Winner | 5+ full-stack projects
        </li>
        <li>
          📍 <span className="font-semibold">Current Location:</span> Noida,
          Uttar Pradesh
        </li>
        <li>
          📍 <span className="font-semibold">Hometown:</span> Basti, Uttar
          Pradesh
        </li>
        <li>
          🧠 <span className="font-semibold">Mindset:</span> Learn. Build.
          Improve.
        </li>
      </ul>
    </section>
  );
};

export default About;
