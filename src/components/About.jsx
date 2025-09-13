import React from 'react';
import { User, Heart, Coffee, Code2 } from 'lucide-react';

const About = () => {
  const skills = ['React', 'JavaScript', 'MongoDB', 'SQL', 'C'];

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      style={{ backgroundColor: '#e0eaff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <User className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Who I Am</h3>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a passionate React JS Developer with a strong foundation in modern web technologies. 
                I love creating intuitive user interfaces and solving complex problems with clean, efficient code. 
                My journey in web development started with a curiosity about how websites work, and it has evolved 
                into a deep passion for creating digital experiences that make a difference.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community. I believe in continuous learning and staying 
                updated with the latest trends in web development.
              </p>

              {/* Fun Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Coffee className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Coffee Lover</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <Code2 className="h-6 w-6 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Clean Code</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <Heart className="h-6 w-6 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Open Source</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Technologies</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill}</span>
                      <span className="text-blue-600 font-semibold">
                        {85 + index * 2}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 group-hover:from-purple-500 group-hover:to-blue-600"
                        style={{ width: `${85 + index * 2}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What I Do</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Frontend Development with React & Modern JavaScript
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Database Design & Management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Responsive Web Design & UI/UX
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;