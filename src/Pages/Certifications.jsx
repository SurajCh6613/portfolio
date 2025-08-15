import React from "react";

const certifications = [
  {
    title: "Core Java Training",
    provider: "CodeGrip Training",
  },

  {
    title: "Problem Solving (Intermediate)",
    provider: "CodeChef | LeetCode ",
  },
  {
    title: "HTML, CSS, JavaScript for Web Developers",
    provider: "Sofcon",
  },
];

const Certifications = () => {
  return (
    <section className="py-12 pt-20 px-6 bg-gray-800 text-white">
      <h2 className="text-4xl font-extrabold mb-10 text-center">
        📜 Certifications
      </h2>
      <div className="max-w-full mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-700 p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-white">{cert.title}</h3>
            <p className="text-sm text-gray-200">{cert.provider}</p>
            {cert.details && (
              <p className="text-xs text-gray-500 mt-1">{cert.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
