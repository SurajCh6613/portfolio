import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wrxh1xf",
        "template_u6tout1",
        form.current,
        "AAgmPH08wDDiFW1a6"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[128px]" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="text-primary font-mono text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 md:mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to say hi, I'd love to hear
            from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start overflow-hidden">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass rounded-xl p-6 hover-lift text-left">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1 md:mb-2" />
              <h3 className="font-semibold md:mb-1 text-left">Email</h3>
              <a
                href="mailto:surajchaudhary6613@gmail.com"
                className="text-muted-foreground hover:text-primary text-xs md:text-lg transition-colors break-words"
              >
                surajchaudhary6613@gmail.com
              </a>
            </div>

            <div className="glass rounded-xl p-6 hover-lift text-left">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-accent mb-1 md:mb-2" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground text-xs md:text-lg">
                Current :{" "}
                <span className="glow-text">Noida, Uttar Pradesh</span>
              </p>
              <p className="text-muted-foreground text-xs md:text-lg">
                Hometown :{" "}
                <span className="glow-text">Basti, Uttar Pradesh</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-3"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass rounded-2xl p-4 sm:p-8 space-y-4 md:space-y-6 w-full"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Full Name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Your email"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 md:py-4 rounded-lg bg-primary/80 text-primary-foreground font-semibold flex items-center justify-center gap-2 hover-glow transition-all cursor-pointer"
              >
                <Send className="w-5 h-5" /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
