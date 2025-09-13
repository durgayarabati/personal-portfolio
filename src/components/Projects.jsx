import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Code, Zap, Database, Globe } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // make sure this path is correct

// Mapping string to icon component
const iconMap = {
  Globe,
  Zap,
  Database,
  Code
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsRef = collection(db, 'projects');
      const snapshot = await getDocs(projectsRef);
      const fetchedProjects = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon] || Code;

            return (
              <div
                key={project.id}
                className={`group bg-gradient-to-br ${project.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/60 backdrop-blur-sm rounded-lg text-gray-700 hover:text-black hover:bg-white/80 transition-all duration-300 transform hover:scale-110">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/60 backdrop-blur-sm rounded-lg text-gray-700 hover:text-black hover:bg-white/80 transition-all duration-300 transform hover:scale-110">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center px-4 py-2 bg-white/70 backdrop-blur-sm text-gray-700 font-medium rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={`flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
