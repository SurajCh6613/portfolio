import React from 'react'

const Projects = () => {
  return (
    <section class="py-16 px-6 bg-white pt-20 ">
  <h2 class="text-3xl font-bold mb-8 text-center">💼 Projects</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">

    <div class="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300 ">
      <h3 class="text-2xl font-semibold mb-2">🧠 FinGenius – AI-Powered Smart Finance Management</h3>
      <p class="text-gray-700 mb-2">
        Full-stack finance tracker built with <strong>Next.js</strong>, <strong>Supabase</strong>, <strong>Prisma</strong>, and <strong>Clerk</strong>. Includes email notifications (Inngest) and a beautiful UI with Tailwind + ShadCN.
      </p>
      <p class="text-sm text-gray-500 mb-4">Tech: Next.js, Supabase, Prisma, Clerk, Inngest, Tailwind</p>
      <a href="#" class="btn mr-4">GitHub</a>
      <a href="#" class="btn btn2">Live Demo</a>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300 ">
      <h3 class="text-2xl font-semibold mb-2">✅ Task Manager – Productivity App (MERN)</h3>
      <p class="text-gray-700 mb-2">
        A robust task tracking system with JWT authentication and full CRUD. Secured dashboard and clean UI for productivity-focused users.
      </p>
      <p class="text-sm text-gray-500 mb-4">Tech: MongoDB, Express, React, Node.js, JWT</p>
      <a href="https://github.com/SurajCh6613/task-manager" target='_blank' class="btn mr-4">GitHub</a>
      <a href="https://task-manager-frontend-53qs.onrender.com/" target='_blank' class="btn btn2">Live Demo</a>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300 ">
      <h3 class="text-2xl font-semibold mb-2">🌐 Jobsphere – Job Portal Web App</h3>
      <p class="text-gray-700 mb-2">
        A full-featured MERN-based job portal with role-based access, job filtering, and responsive design.
      </p>
      <p class="text-sm text-gray-500 mb-4">Tech: React, Node.js, Express, MongoDB</p>
    <a href="#" class="btn mr-4">GitHub</a>
      <a href="#" class="btn btn2">Live Demo</a>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300 ">
      <h3 class="text-2xl font-semibold mb-2">💊 Prescripto – Doctor Appointment Booking System</h3>
      <p class="text-gray-700 mb-2">
        Web app for scheduling appointments and managing patient records, powered by Firebase.
      </p>
      <p class="text-sm text-gray-500 mb-4">Tech: React, Tailwind CSS, Firebase</p>
   <a href="#" class="btn mr-4">GitHub</a>
      <a href="#" class="btn btn2">Live Demo</a>
    </div>

    <div class="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300 ">
      <h3 class="text-2xl font-semibold mb-2">📝 To-Do App</h3>
      <p class="text-gray-700 mb-2">
        A lightweight and responsive to-do list app using vanilla JavaScript and local storage.
      </p>
      <p class="text-sm text-gray-500 mb-4">Tech: JavaScript, HTML, CSS</p>
      <a href="#" class="btn mr-4">GitHub</a>
      <a href="#" class="btn btn2">Live Demo</a>
    </div>

  </div>
</section>

  )
}

export default Projects