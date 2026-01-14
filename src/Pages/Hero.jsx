import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";
import socialLinks from "../assets/socialLinks";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative  py-16 px-4 md:section-padding w-full min-h-screen h-full flex flex-col-reverse md:flex-row items-center justify-between"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-[208px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/40 rounded-full blur-[200px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-2 md:mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-mono">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient glow-text">Suraj Chaudhary</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-4 md:mb-8"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-muted-foreground/70 mt-1 max-w-2xl mx-auto">
            I craft beautiful, performant web experiences with modern
            technologies. Let's build something amazing together.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex  gap-4 justify-center items-center mb-6 md:mb-12"
        >
          <a
            href="#projects"
            className="group p-3 md:px-8 md:py-4 rounded-full text-xs bg-primary text-primary-foreground font-semibold hover-glow transition-all duration-300 flex items-center gap-2"
          >
            View My Work
            <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1pYx-B2pnDDJGBum4rlwlWXluzXs8aX3O/view?usp=drive_link"
            className="md:px-8 p-3 md:py-4 rounded-full glass text-xs text-foreground font-semibold hover:bg-secondary transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
