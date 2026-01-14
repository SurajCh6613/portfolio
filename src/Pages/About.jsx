import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Coffee } from "lucide-react";
import heroImage from "../assets/heroImage.png";

const highlights = [
  { icon: Code2, label: "5+ Months Experience", color: "text-primary" },
  { icon: Palette, label: "UI/UX Focused", color: "text-accent" },
  { icon: Rocket, label: "5+ Projects", color: "text-primary" },
  { icon: Coffee, label: "∞ Coffee", color: "text-accent" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative overflow-hidden section-padding h-full w-full"
      ref={ref}
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-primary font-mono text-sm"> About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 md:mt-4">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image/Avatar Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md h-full mx-auto md:aspect-square overflow-hidden">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative glass rounded-2xl px-4 py-8 h-full flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 left-4 font-mono text-xs text-muted-foreground"></div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                    <img
                      src={heroImage}
                      alt="Hero Image"
                      className="w-32 h-32 object-contain hover:scale-110 duration-300"
                    />
                  </div>
                  {/* My Info */}
                  <div className="font-mono text-sm text-muted-foreground space-y-1">
                    <div>
                      <span className="text-primary">const</span> developer ={" "}
                      {"{"}
                    </div>

                    <div className="flex flex-col gap-1 items-start">
                      <div>
                        <span>name:</span>
                        <span className="text-accent">"Suraj Chaudhary"</span>
                      </div>

                      <div>
                        <span>role:</span>
                        <span className="text-accent">
                          "Full Stack Developer"
                        </span>
                      </div>

                      <div>
                        <span>techStack:</span>
                        <span className="text-accent">"MERN + Java"</span>
                      </div>

                      <div>
                        <span>passion:</span>
                        <span className="text-accent">
                          "Building impactful web apps"
                        </span>
                      </div>
                    </div>

                    <div>{"}"};</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Suraj Chaudhary, a passionate full-stack developer with
              hands-on experience in MERN stack and Java. I love building
              modern, responsive web applications that solve real problems and
              provide seamless user experiences. I thrive in collaborative
              environments where I can learn and contribute.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside coding, I explore new technologies, refine my skills on
              competitive programming platforms like LeetCode and CodeChef, and
              work on personal projects that expand my problem-solving
              abilities.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 ">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-4 hover-lift cursor-default"
                >
                  <item.icon className={`w-6 h-6 ${item.color} mb-1 md:mb-2`} />
                  <p className="text-xs font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
