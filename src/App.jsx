import React from "react";
import profileImage from "./assets/photo.jpg"; // adjust path if different

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-3">
        
        {/* Left Side - Image */}
        <div className="bg-blue-100 flex items-center justify-center p-6">
          <img
            src={profileImage}
            alt="Bhawana KC"
            className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-white"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:col-span-2 p-8 space-y-6">
          <header className="space-y-1">
            <h1 className="text-4xl font-bold text-gray-800">Bhawana KC</h1>
            <p className="text-xl text-blue-600"></p>
            <p className="text-gray-600">Student at Gandaki College of Engineering and Science</p>
            <p className="text-sm text-gray-500 italic">
              Aspiring developer practicing Software Engineering to build impactful solutions.
            </p>
          </header>

          {/* Contact Section */}
          <section className="space-y-1">
            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-1">Contact</h2>
            <p>Email: <a href="mailto:kcbhawana78@gmail.com" className="text-blue-500">kcbhawana78@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/kcbhawana07" target="_blank" className="text-blue-500">github.com/kcbhawana07</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/bhawana-kc-7baa112ab/" target="_blank" className="text-blue-500">linkedin.com/in/bhawana-kc</a></p>
          </section>

          {/* Interests Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-1">Interests</h2>
            <p>
              I am passionate about <strong>Data Analysis</strong> and currently exploring <strong>Frontend Development</strong>.
              I love learning new technologies and solving real-world problems through code.
            </p>
          </section>

          

  

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-1 mb-3">Skills</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-center text-gray-600">
              {[
                { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
              ].map(skill => (
                <div key={skill.name} className="flex flex-col items-center">
                  <img src={skill.src} alt={skill.name} className="w-10 h-10" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <footer className="pt-6 text-sm text-gray-400 text-center">
            &copy; 2025 Bhawana KC. All rights reserved.
          </footer>
        </div>
      </div>
    </main>
  );
}
