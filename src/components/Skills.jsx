import React from 'react';
import { 
  Code, 
  Palette, 
  Zap, 
  Layers, 
  Database, 
  GitBranch,
  Server,
  Terminal,
  Cloud
} from 'lucide-react';


const Skills = () => {

 const skills = [
    {
      name: 'HTML',
      icon: Code,
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      description: 'Semantic markup and accessibility'
    },
    {
      name: 'CSS',
      icon: Palette,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: 'Modern styling and animations'
    },
    {
      name: 'JavaScript',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      description: 'ES6+ and modern frameworks'
    },
    {
      name: 'React',
      icon: Layers,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      description: 'Component-based architecture'
    },
    {
      name: 'MongoDB',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      description: 'NoSQL database management'
    },
    {
      name: 'SQL',
      icon: Server,
      color: 'from-indigo-500 to-blue-700',
      bgColor: 'bg-indigo-50',
      description: 'Relational databases and queries'
    },
    {
      name: 'Python',
      icon: Terminal,
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-50',
      description: 'Scripting, automation, and data handling'
    },
    {
      name: 'AWS',
      icon: Cloud,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      description: 'Cloud infrastructure and deployment'
    },
    {
      name: 'Git',
      icon: GitBranch,
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50',
      description: 'Version control and collaboration'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group ${skill.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${skill.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {skill.description}
                </p>

                {/* Animated border */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Responsive Design', 'REST APIs', 'Agile Methodology', 
                'Problem Solving', 'Team Collaboration', 'Performance Optimization',
                'Testing', 'Debugging', 'Code Review'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;