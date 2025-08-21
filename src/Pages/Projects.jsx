// import React from "react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Task Manager – Productivity App (MERN)",
//       emoji: "✅",
//       description:
//         "A robust task tracking system with JWT authentication and full CRUD. Secured dashboard and clean UI for productivity-focused users.",
//       tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
//       github: "https://github.com/SurajCh6613/task-manager",
//       liveDemo: "https://task-manager-frontend-53qs.onrender.com/",
//     },
//     {
//       title: "AI-Powered Code Reviewer",
//       emoji: "🌐",
//       description:
//         "A full-featured MERN-based AI-Powered Code Reviewer for review Code to make clean, efficient, and scalable code.",
//       tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
//       github: "https://github.com/SurajCh6613/code-reviewer",
//       liveDemo: "#",
//     },
//     {
//       title: "Prescripto – Doctor Appointment Booking System",
//       emoji: "💊",
//       description:
//         "Web app for scheduling appointments and managing patient records, powered by Firebase.",
//       tech: ["React", "Tailwind CSS", "Firebase"],
//       github: "#",
//       liveDemo: "#",
//     },
//   ];

//   return (
//     <section class="py-16 px-6 bg-gradient-to-l from-gray-400 to-gray-100 pt-20 ">
//       <h2 class="text-3xl font-bold mb-8 text-center">💼 Projects</h2>
//       <div class="flex flex-col gap-10 ">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             class={`bg-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300 w-1/2 ${
//               index % 2 === 0 ? `flex-row` : `flex-row-reverse`
//             }`}
//           >
//             <h3 class="text-2xl font-semibold mb-2">
//               {project.emoji}
//               {project.title}
//             </h3>
//             <p class="text-gray-700 mb-2">{project.description}</p>
//             <p class="text-sm text-gray-500 mb-4">
//               Tech:{" "}
//               {project.tech.map((tech) => (
//                 <p className="inline ml-2 border rounded-md px-1.5 shadow-md py-1">
//                   {tech}
//                 </p>
//               ))}
//             </p>
//             <a href={project.github} target="_blank" class="btn mr-4">
//               GitHub
//             </a>
//             <a href={project.liveDemo} target="_blank" class="btn btn2">
//               Live Demo
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "ReferrLink – Professional Referral Platform (MERN)",
      emoji: "🤝",
      description:
        "A platform where juniors can professionally request job referrals from seniors, and seniors can respond if the junior is a good fit. Includes JWT authentication, profile management, and referral request workflow.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
      github: "https://github.com/SurajCh6613/referrlink",
      liveDemo: "https://referrlink.vercel.app/",
      image: "/assets/projects/referrlink.png",
    },

    {
      title: "Task Manager – Productivity App (MERN)",
      emoji: "✅",
      description:
        "A robust task tracking system with JWT authentication and full CRUD. Secured dashboard and clean UI for productivity-focused users.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      github: "https://github.com/SurajCh6613/task-manager",
      liveDemo: "https://task-manager-frontend-53qs.onrender.com/",
      image: "/assets/projects/task-manager.png",
    },
    {
      title: "AI-Powered Code Reviewer",
      emoji: "🌐",
      description:
        "A full-featured MERN-based AI-Powered Code Reviewer for reviewing code to make it clean, efficient, and scalable.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
      github: "https://github.com/SurajCh6613/code-reviewer",
      liveDemo: "#",
      image: "/assets/projects/code-reviewer.png",
    },
    {
      title: "Prescripto – Doctor Appointment Booking System",
      emoji: "💊",
      description:
        "Web app for scheduling appointments and managing patient records, powered by Firebase.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/SurajCh6613/Doctor-appointment-booking",
      liveDemo: "https://doctor-appointment-booking-gamma.vercel.app/",
      image: "/assets/projects/prescripto.png",
    },
  ];

  return (
    <section id="projects" className="py-12 px-6 pt-20 bg-gray-700  text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">💼 Projects</h2>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`bg-gray-800  rounded-2xl shadow-xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-transform duration-300 hover:scale-[1.02] ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Left Section */}
            <div className="md:w-3/4 text-white">
              <h3 className=" md:text-2xl font-semibold mb-2">
                {project.emoji} {project.title}
              </h3>
              <p className="mb-4 text-sm md:text-xl">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={`${project.title}-tech-${techIndex}`}
                    className="inline-block bg-gray-100 text-gray-800 text-xs md:text-sm px-2 py-1 rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
            {/* Right section */}
            <div className="hidden w-full md:flex md:w-1/4  justify-center items-center">
              <img
                src={project.image}
                alt=""
                className="md:w-[100%] h-[100%] p-8"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
