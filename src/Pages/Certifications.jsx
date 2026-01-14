import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    title: "Core Java Training",
    provider: "CodeGrip Training",
  },
  {
    title: "Problem Solving (Intermediate)",
    provider: "CodeChef | LeetCode",
  },
  {
    title: "HTML, CSS, JavaScript for Web Developers",
    provider: "Sofcon",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="certifications"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Blur Effects (same style as other sections) */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-accent/20 blur-[150px] rounded-full" />

      <div className="relative max-w-6xl w-full mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            📜 <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="glass rounded-2xl p-6 border border-border hover-lift transition-all cursor-default"
            >
              <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {cert.provider}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
