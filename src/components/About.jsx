import React from 'react';
import { User, Heart, Coffee, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      style={{ backgroundColor: '#e0eaff' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* About Content */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
          <div className="flex items-center justify-center mb-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center p-3 bg-blue-50 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Problem Solving</span>
            </div>
            <div className="flex items-center justify-center p-3 bg-purple-50 rounded-lg">
              <Cpu className="h-6 w-6 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Full-Stack Development</span>
            </div>
            <div className="flex items-center justify-center p-3 bg-green-50 rounded-lg">
              <Users className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Team Collaboration</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
