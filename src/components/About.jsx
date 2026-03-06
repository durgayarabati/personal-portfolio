import React from 'react';
import { Users, User, Briefcase, Cpu } from 'lucide-react';

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
            I’m a Full Stack Developer with hands-on experience in building responsive and user-friendly
            web applications using React.js, Node.js, Express.js, and MongoDB. I enjoy turning ideas
            into real-world projects and writing clean, maintainable code that creates smooth user experiences.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            I have built full-stack projects that strengthened my understanding of frontend development,
            backend APIs, authentication, database integration, and responsive design. I’m currently focused
            on improving my development skills, strengthening problem-solving ability, and exploring AI-related
            applications to become a well-rounded software developer.
          </p>



          {/* Fun Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center p-3 bg-blue-50 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Problem Solving</span>
            </div>
            <div className="flex items-center justify-center p-3 bg-purple-50 rounded-lg">
              <Cpu className="h-6 w-6 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">MERN Stack Development</span>
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