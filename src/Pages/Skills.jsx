import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: "Programming Languages",
      emoji: "💻",
      skills: [
        { skill: "Java", image: "/assets/Skills/java.svg" },
        { skill: "JavaScript", image: "/assets/Skills/javascript.svg" },
        { skill: "C", image: "/assets/Skills/c.svg" },
      ],
    },
    {
      category: "Frontend Development",
      emoji: "🌐",
      skills: [
        { skill: "HTML", image: "/assets/Skills/html5.svg" },
        { skill: "CSS", image: "/assets/Skills/css.svg" },
        { skill: "React", image: "/assets/Skills/react.svg" },
        { skill: "Tailwind", image: "/assets/Skills/tailwindcss.svg" },
      ],
    },
    {
      category: "Backend Development",
      emoji: "🔧",
      skills: [
        {
          skill: "Node",
          image: "/assets/Skills/nodedotjs.svg",
          style: "bg-yellow-200",
        },
        {
          skill: "Express",
          image: "/assets/Skills/express.svg",
          style: "bg-yellow-200",
        },
      ],
    },
    {
      category: "Databases",
      emoji: "🗃️",
      skills: [
        { skill: "MongoDB", image: "/assets/Skills/mongodb.svg" },
        { skill: "SQL", image: "/assets/Skills/sql.svg" },
      ],
    },
    {
      category: "Tools & Platforms",
      emoji: "⚙️",
      skills: [
        { skill: "Git", image: "/assets/Skills/git.svg" },
        {
          skill: "GitHub",
          image: "/assets/Skills/github.svg",
          style: "bg-white",
        },
        { skill: "VS Code", image: "/assets/Skills/vscode.svg" },
        { skill: "Postman", image: "/assets/Skills/postman.svg" },
        // { skill: "Vercel", image: "/assets/Skills/vercel.svg",style:'bg-white', },
      ],
    },
    {
      category: "Additional Skills",
      emoji: "🧠",
      skills: [
        {
          skill: "JWT",
          image: "/assets/Skills/jsonwebtokens.svg",
          style: "bg-green-600",
        },
        {
          skill: "Leetcode",
          image: "/assets/Skills/leetcode.svg",
          style: "bg-yellow-600",
        },
        {
          skill: "Bcrypt",
          image: "/assets/Skills/letsencrypt.svg",
          style: "bg-white",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding relative min-h-screen w-full h-full"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-8 md:mb-16"
      >
        <span className="text-primary font-mono text-sm">
          Skills & Expertise
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 md:mt-4">
          My <span className="text-gradient">Tech Stack</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-full mx-auto">
        {skills.map(({ category, emoji, skills }, index) => (
          <div className={`relative group`} key={index}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  key={category}
                  className="rounded-lg  transform transition duration-300"
                >
                  <h3 className="font-semibold text-lg mb-4 text-center text-yellow-300">
                    {emoji} {category}
                  </h3>
                  <ul className="flex flex-wrap justify-center gap-6">
                    {skills.map(({ skill, image, style }) => (
                      <li
                        key={skill}
                        className="flex flex-col items-center space-y-1 hover:scale-105 duration-300 group"
                      >
                        <div
                          className={`p-2 rounded-md ${
                            style ? style : "bg-gray-900"
                          } shadow-md`}
                        >
                          <img
                            src={image}
                            alt={skill}
                            className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 object-contain"
                          />
                        </div>
                        <span className="text-white text-sm font-medium">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
