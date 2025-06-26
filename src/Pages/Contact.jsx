import React from "react";

const Contact = () => {
  return (
   <section class="pt-20 px-6 bg-white mb-4">
  <h2 class="text-3xl font-bold text-center mb-8">📬 Contact Me</h2>
  
  <p class="text-center text-gray-600 max-w-full text-xl mx-auto mb-6">
    I'm always open to connecting, collaborating, or discussing exciting opportunities.<br />
    Whether it's a freelance project, internship, or full-time role — feel free to reach out!
  </p>

  <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mt-10">

    <div class="text-gray-700 text-lg space-y-6">
      <p>📍 <strong>Location:</strong> Basti, Uttar Pradesh, India</p>
      <p>📧 <strong>Email:</strong> <a href="mailto:surajchaudhary6613@gmail.com" class="text-blue-600 underline">surajchaudhary6613@gmail.com</a></p>
      <p>💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/surajch6613" target="_blank" class="text-blue-600 underline">Surajch6613</a></p>
      <p>💻 <strong>GitHub:</strong> <a href="https://github.com/surajch6613" target="_blank" class="text-blue-600 underline">Surajch6613</a></p>
      <p class="mt-4">Let’s build something amazing together 🚀</p>
    </div>


    <form action="https://formspree.io/f/your-form-id" method="POST" class="space-y-2">
      <div>
        <label class="block text-gray-700 font-medium mb-1">Name</label>
        <input type="text" name="name" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Email</label>
        <input type="email" name="email" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Message</label>
        <textarea name="message" rows="3" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  </div>
</section>

  );
};

export default Contact;
