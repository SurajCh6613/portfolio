import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import ReferrLink from "../assets/projects/ReferrLink.png";
import Prescripto from "../assets/projects/Prescripto.png";
import Task_manager from "../assets/projects/Task-manager.png";

const projects = [
  {
    title: "ReferrLink – Professional Referral Platform (MERN)",
    description:
      "A platform where juniors can professionally request job referrals from seniors, and seniors can respond if the junior is a good fit. Includes JWT authentication, profile management, and referral request workflow.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/SurajCh6613/referrlink",
    liveUrl: "https://referrlink.vercel.app/",
    image: ReferrLink,
    featured: true,
  },

  {
    title: "Task Manager - Productivity App (MERN)",
    description:
      "A robust task tracking system with JWT authentication and full CRUD. Secured dashboard and clean UI for productivity-focused users.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    githubUrl: "https://github.com/SurajCh6613/task-manager",
    liveUrl: "https://task-manager-frontend-53qs.onrender.com/",
    image: Task_manager,
    featured: true,
  },
  {
    title: "AI-Powered Code Reviewer",
    description:
      "A full-featured MERN-based AI-Powered Code Reviewer for reviewing code to make it clean, efficient, and scalable.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
    githubUrl: "https://github.com/SurajCh6613/code-reviewer",
    liveUrl: "#",
    image: "/assets/projects/code-reviewer.png",
    featured: false,
  },
  {
    title: "Prescripto - Doctor Appointment Booking System",
    description:
      "Web app for scheduling appointments and managing patient records, powered by Firebase.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/SurajCh6613/Doctor-appointment-booking",
    liveUrl: "https://doctor-appointment-booking-gamma.vercel.app/",
    image: Prescripto,
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="section-padding w-full h-full relative"
      ref={ref}
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <span className="text-primary font-mono text-sm">Featured Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 md:mt-4">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 md:space-y-18 mb-12 md:mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
                className={`grid md:grid-cols-2 gap-4 md:gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative group ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative glass rounded-2xl overflow-hidden aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="opacity-80"
                      />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full glass flex items-center justify-center"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`space-y-4 ${
                    index % 2 === 1 ? "md:order-1 md:text-right" : ""
                  }`}
                >
                  <span className="text-primary font-mono text-sm">
                    Featured Project
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold group">
                    <a
                      href={project.liveUrl}
                      className="hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      {project.title}
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-xl font-semibold text-center mb-8"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass rounded-xl p-6 hover-lift group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-sm md:text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-3">
                    <a
                      target="_blank"
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      target="_blank"
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
