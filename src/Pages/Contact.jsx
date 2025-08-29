import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
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
          toast.success("✅ Message sent successfully!", {
            position: "top-right",
          });
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send message. Please try again.", {
            position: "top-right",
          });
        }
      );
  };
  return (
    <section className="pt-20 px-6 bg-gray-700 text-white pb-10">
      <h2 className="text-4xl font-extrabold text-center mb-2">
        📬 Contact Me
      </h2>

      <p className="text-center max-w-2xl text-lg mx-auto mb-6">
        I'm always open to connecting, collaborating, or discussing exciting
        opportunities.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="text-gray-200 text-lg space-y-6 bg-gray-700 backdrop-blur-md p-6 rounded-2xl shadow-md">
          <p>
            📍 <strong>Current Location :</strong> Noida, Uttar Pradesh, India
          </p>
          <p>
            📍 <strong>Hometown :</strong> Basti, Uttar Pradesh, India
          </p>
          <p>
            📧 <strong>Email:</strong>
            <a
              href="mailto:surajchaudhary6613@gmail.com"
              className="underline hover:text-blue-500 ml-1"
            >
              surajchaudhary6613@gmail.com
            </a>
          </p>
          {/* Social Links */}
          <div className="mt-4 flex space-x-4 text-5xl">
            <a target="_blank" href="https://www.linkedin.com/in/surajch6613/">
              <FaLinkedin className="hover:scale-105 duration-300" />
            </a>
            <a target="_blank" href="https://github.com/SurajCh6613">
              <FaSquareGithub className="hover:scale-105 duration-300" />
            </a>
            <a target="_blank" href="https://leetcode.com/u/Surajch6613/">
              <SiLeetcode className="hover:scale-105 duration-300 hover:text-yellow-400" />
            </a>
          </div>
          <p className="mt-4 font-medium">
            Let’s build something amazing together 🚀
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-3 bg-gray-700 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="2"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 cursor-pointer rounded-lg font-medium hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
