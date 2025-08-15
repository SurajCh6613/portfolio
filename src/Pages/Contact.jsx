import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="pt-12 px-6 bg-gray-700 text-white pb-10">
      <h2 className="text-4xl font-extrabold text-center mb-6">
        📬 Contact Me
      </h2>

      <p className="text-center max-w-2xl text-lg mx-auto mb-10">
        I'm always open to connecting, collaborating, or discussing exciting
        opportunities. Whether it's a freelance project, internship, or
        full-time role — feel free to reach out!
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="text-gray-200 text-lg space-y-6 bg-gray-700 backdrop-blur-md p-6 rounded-2xl shadow-md">
          <p>
            📍 <strong>Location:</strong> Basti, Uttar Pradesh, India
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
          <p>
            💼 <strong>LinkedIn:</strong>
            <a
              href="https://linkedin.com/in/surajch6613"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500 ml-1"
            >
              Surajch6613
            </a>
          </p>
          <p>
            💻 <strong>GitHub:</strong>
            <a
              href="https://github.com/surajch6613"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500 ml-1"
            >
              Surajch6613
            </a>
          </p>
          <p className="mt-4 font-medium">
            Let’s build something amazing together 🚀
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-gray-700 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
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
              rows="4"
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
    </section>
  );
};

export default Contact;
