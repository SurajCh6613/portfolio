import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      emoji: "💻",
      skills: [
        {
          skill: "Java",
          image: "/assets/Skills/java.svg",
        },
        {
          skill: "JavaScript",
          image: "/assets/Skills/javascript.svg",
        },
        {
          skill: "C",
          image: "/assets/Skills/c.svg",
        },
      ],
    },
    {
      category: "Frontend Development",
      emoji: "🌐",
      //   skills: [{
      //   skill: "HTML",
      //   image: "/assets/Skills/html5.svg",
      // }, CSS3", "React.js", "Tailwind CSS", "Next.js"],
      skills: [
        {
          skill: "HTML",
          image: "/assets/Skills/html5.svg",
        },
        {
          skill: "CSS",
          image: "/assets/Skills/css.svg",
        },
        {
          skill: "React",
          image: "/assets/Skills/react.svg",
        },
        {
          skill: "Tailwind",
          image: "/assets/Skills/tailwindcss.svg",
        },
      ],
    },
    {
      category: "Backend Development",
      emoji: "🔧",
      skills: [
        {
          skill: "Node",
          image: "/assets/Skills/nodedotjs.svg",
        },
        {
          skill: "Express",
          image: "/assets/Skills/express.svg",
        },
        // {
        //   skill: "Restful API's",
        //   image: "/assets/Skills/react.svg",
        // },
        // {
        //   skill: "Tailwind",
        //   image: "/assets/Skills/tailwindcss.svg",
        // },
      ],
    },
    {
      category: "Databases",
      emoji: "🗃️",
      skills: [
        {
          skill: "MongoDB",
          image: "/assets/Skills/mongodb.svg",
        },
        {
          skill: "SQL",
          image: "/assets/Skills/sql.svg",
        },
        // {
        //   skill: "React",
        //   image: "/assets/Skills/react.svg",
        // },
        // {
        //   skill: "Tailwind",
        //   image: "/assets/Skills/tailwindcss.svg",
        // },
      ],
    },
    {
      category: "Tools & Platforms",
      emoji: "⚙️",
      skills: [
        {
          skill: "Git",
          image: "/assets/Skills/git.svg",
        },
        {
          skill: "GitHub",
          image: "/assets/Skills/github.svg",
        },
        {
          skill: "VS Code",
          image: "/assets/Skills/vscode.svg",
        },
        {
          skill: "Postman",
          image: "/assets/Skills/postman.svg",
        },
        {
          skill: "Vercel",
          image: "/assets/Skills/vercel.svg",
        },
      ],
    },
    {
      category: "Additional Skills",
      emoji: "🧠",
      skills: [
        {
          skill: "JWT",
style:"bg-green-600",
          image: "/assets/Skills/jsonwebtokens.svg",
        },
        {
          style: "bg-yellow-600",
          skill: "Leetcode",
          image: "/assets/Skills/leetcode.svg",
        },
        {
          skill: "Bcrypt",
          image: "/assets/Skills/letsencrypt.svg",
        },
      ],
    },
  ];

  return (
    <section className="py-8 px-6 bg-gradient-to-l from-gray-100 to-gray-300 pt-20 ">
      <h2 className="text-3xl font-bold text-center mb-8">🛠 Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full mx-auto text-gray-800">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="shadow-lg p-2 rounded-lg hover:scale-105 duration-300"
          >
            <h3 className="font-semibold text-lg mb-2 text-center">
              {skill.emoji} {skill.category}
            </h3>
            <ul className="list-inside pl-4 flex justify-around text-center">
              {skill.skills.map((skill) => (
                <li key={skill} className="ml-2">
                  <img
                    src={skill.image}
                    className={`${skill.style} rounded-md w-12 h-12`}
                  ></img>{" "}
                  {skill.skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
