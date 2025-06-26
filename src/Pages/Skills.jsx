import React from "react";

const Skills = () => {
  return (
    <section className="py-8 px-6 bg-gray-50 pt-20 ">
      <h2 className="text-3xl font-bold text-center mb-8">🛠 Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full mx-auto text-gray-700">
        <div className="shadow-lg p-2 rounded-lg hover:scale-105 duration-300">
          <h3 className="font-semibold text-lg mb-2 text-center">
            💻 Programming Languages
          </h3>
          <ul className="list-inside pl-4">
            <li>Java</li>
            <li>C</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </div>
        <div className="shadow-lg p-2 rounded-lg hover:scale-105 duration-300">
          <h3 className="font-semibold text-lg mb-2 text-center">
            🌐 Frontend Development
          </h3>
          <ul className="list-inside pl-4">
            <li>HTML5, CSS3</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="shadow-lg p-2 rounded-lg hover:scale-105 duration-300">
          <h3 className="font-semibold text-lg mb-2 text-center">
            🔧 Backend Development
          </h3>
          <ul className="list-inside pl-4">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>Prisma</li>
          </ul>
        </div>
        <div className="shadow-lg p-2 rounded-lg hover:scale-105 duration-300">
          <h3 className="font-semibold text-lg mb-2 text-center">
            🗃️ Databases
          </h3>
          <ul className="list-inside pl-4">
            <li>MongoDB</li>
            <li>Supabase</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="shadow-lg p-2 rounded-lg hover:scale-105 duration-300">
          <h3 className="font-semibold text-lg mb-2 text-center">
            ⚙️ Tools & Platforms
          </h3>
          <ul className="list-inside pl-4">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Render, Vercel, Netlify</li>
          </ul>
        </div>
        <div className="shadow-lg p-2 rounded-lg hover:scale-105 duration-300">
          <h3 className="font-semibold text-lg mb-2 text-center">
            🧠 Additional Skills
          </h3>
          <ul className="list-inside pl-4">
            <li>JWT, Clerk Authentication</li>
            <li>Inngest, ArcJet</li>
            <li>Responsive UI/UX Design</li>
            <li>DSA: 260+ LeetCode, 200+ CodeChef</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

{
  /* <section class="py-16 px-6 bg-gray-50">
      <h2 class="text-3xl font-bold mb-8 text-center">🛠 Skills</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-gray-700">
       

    

  

        <div>
          <h3 class="font-semibold text-lg mb-2">🧠 Additional Skills</h3>
          <ul class="list-disc list-inside">
            <li>JWT, Clerk Authentication</li>
            <li>Inngest, ArcJet</li>
            <li>Responsive UI/UX Design</li>
            <li>DSA: 230+ LeetCode, 200+ CodeChef</li>
          </ul>
        </div>
      </div>
    </section> */
}
