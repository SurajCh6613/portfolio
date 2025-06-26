import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      emoji: "💻",
      skills: ["Java", "C", "JavaScript (ES6+)"],
    },
    {
      category: "Frontend Development",
      emoji: "🌐",
      skills: ["HTML5, CSS3", "React.js", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend Development",
      emoji: "🔧",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Prisma"],
    },
    {
      category: "Databases",
      emoji: "🗃️",
      skills: ["MongoDB", "Supabase", "MySQL"],
    },
    {
      category: "Tools & Platforms",
      emoji: "⚙️",
      skills: ["Git & GitHub", "VS Code", "Postman", "Render, Vercel, Netlify"],
    },
    {
      category: "Additional Skills",
      emoji: "🧠",
      skills: [
        "JWT, Clerk Authentication",
        "Inngest, ArcJet",
        "Responsive UI/UX Design",
        "DSA: 260+ LeetCode, 200+ CodeChef",
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
            <ul className="list-inside pl-4">
              {skill.skills.map((skill) => (
                <li key={skill} className="ml-2">
                  {skill}
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