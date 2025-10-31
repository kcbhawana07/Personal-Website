import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Bhawana KC</h1>
          <p className="text-xl mb-2">Software Engineering Student</p>
          <p className="text-blue-100">Gandaki College of Engineering and Science</p>
          {/* <p className="text-sm text-blue-200 mt-2">Passionate about AI, Machine Learning & Data Science</p> */}
        </div>

        <div className="p-8 space-y-8">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I am a passionate software engineering student .
              I enjoy exploring new technologies and building practical solutions 
              that make a real impact. My goal is to develop innovative applications and solve complex problems through technology, 
              particularly in the fields of AI and data Engineering. I believe in continuous learning and staying updated with the latest 
              technological advancements to create meaningful solutions.
            </p>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Education</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Bachelor of Engineering in Software Engineering</h3>
                <span className="text-sm text-gray-500">2022 - Present</span>
              </div>
              <p className="text-gray-600 mb-2">Gandaki College of Engineering and Science</p>
              <p className="text-sm text-gray-500">• Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development</p>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Projects</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Portfolio Website</h3>
                <p className="text-gray-600 text-sm mb-3">A responsive portfolio website built with React and Tailwind CSS</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">JavaScript</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <div>
                  <span className="font-medium">Email:</span>
                  <a href="mailto:kcbhawana78@gmail.com" className="text-blue-500 hover:underline ml-1">kcbhawana78@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                <div>
                  <span className="font-medium">GitHub:</span>
                  <a href="https://github.com/kcbhawana07" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">github.com/kcbhawana07</a>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                </svg>
                <div>
                  <span className="font-medium">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/bhawana-kc-7baa112ab/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">linkedin.com/in/bhawana-kc</a>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Technical Skills</h2>
            
            {/* Programming Languages */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Programming Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                  
                  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
                ].map(skill => (
                  <div key={skill.name} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <img src={skill.src} alt={skill.name} className="w-10 h-10 mb-2" />
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Web Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
                ].map(skill => (
                  <div key={skill.name} className="flex flex-col items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <img src={skill.src} alt={skill.name} className="w-10 h-10 mb-2" />
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Science & AI */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Data Science & AI</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
                  { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                  { name: "Matplotlib", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" }
                ].map(skill => (
                  <div key={skill.name} className="flex flex-col items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <img src={skill.src} alt={skill.name} className="w-10 h-10 mb-2" />
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Tools & Others</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                  { name: "Jupyter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
                  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
                ].map(skill => (
                  <div key={skill.name} className="flex flex-col items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <img src={skill.src} alt={skill.name} className="w-10 h-10 mb-2" />
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hobbies Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Hobbies & Interests</h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {[
                { name: "Walking", src: "https://img.icons8.com/ios-filled/50/walking.png" },
                { name: "Trekking", src: "https://img.icons8.com/ios-filled/50/mountain.png" },
                { name: "Hiking", src: "https://img.icons8.com/ios-filled/50/trekking.png" },
                { name: "Traveling", src: "https://img.icons8.com/ios-filled/50/around-the-globe.png" },
                { name: "Problem Solving", src: "https://img.icons8.com/ios-filled/50/puzzle.png" }
              ].map(hobby => (
                <div key={hobby.name} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <img src={hobby.src} alt={hobby.name} className="w-12 h-12 mb-2" />
                  <span className="text-sm font-medium text-gray-700 text-center">{hobby.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-6 text-sm text-gray-400 text-center border-t">
            &copy; 2025 Bhawana KC. All rights reserved.
          </footer>
        </div>
      </div>
    </main>
  );
}
