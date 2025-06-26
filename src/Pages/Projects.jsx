import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "FinGenius – AI-Powered Smart Finance Management",
      emoji: "🧠",
      description:
        "Full-stack finance tracker built with Next.js, Supabase, Prisma, and Clerk. Includes email notifications (Inngest) and a beautiful UI with Tailwind + ShadCN.",
      tech: ["Next.js", "Supabase", "Prisma", "Clerk", "Inngest", "Tailwind"],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "Task Manager – Productivity App (MERN)",
      emoji: "✅",
      description:
        "A robust task tracking system with JWT authentication and full CRUD. Secured dashboard and clean UI for productivity-focused users.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      github: "https://github.com/SurajCh6613/task-manager",
      liveDemo: "https://task-manager-frontend-53qs.onrender.com/",
    },
    {
      title: "Jobsphere – Job Portal Web App",
      emoji: "🌐",
      description:
        "A full-featured MERN-based job portal with role-based access, job filtering, and responsive design.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      liveDemo: "#",
    },
    {
      title: "Prescripto – Doctor Appointment Booking System",
      emoji: "💊",
      description:
        "Web app for scheduling appointments and managing patient records, powered by Firebase.",
      tech: ["React", "Tailwind CSS", "Firebase"],
      github: "#",
      liveDemo: "#",
    },
  ];

  return (
    <section class="py-16 px-6 bg-gradient-to-l from-gray-400 to-gray-100 pt-20 ">
      <h2 class="text-3xl font-bold mb-8 text-center">💼 Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} class="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300 ">
            <h3 class="text-2xl font-semibold mb-2">
              {project.emoji}
              {project.title}
            </h3>
            <p class="text-gray-700 mb-2">{project.description}</p>
            <p class="text-sm text-gray-500 mb-4">
              Tech:{" "}
              {project.tech.map((tech) => (
                <p className="inline ml-2">{tech}</p>
              ))}
            </p>
            <a href={project.github} target="_blank" class="btn mr-4">
              GitHub
            </a>
            <a href={project.liveDemo} target="_blank" class="btn btn2">
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
