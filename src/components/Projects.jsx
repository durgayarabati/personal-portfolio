import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Example project data
const projects = [
  {
    title: 'Food Delivery Website',
    image: '/images/projects/food-delivery.jpg',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/yourusername/food-delivery',
  },
  {
    title: 'Portfolio Website',
    image: '/images/projects/portfolio.jpg',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'E-Commerce App',
    image: '/images/projects/ecommerce.jpg',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/yourusername/ecommerce',
  },
  {
    title: 'Chat Application',
    image: '/images/projects/chat-app.jpg',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/yourusername/chat-app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <ExternalLink className="h-5 w-5" /> Live
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 hover:text-black font-medium"
                  >
                    <Github className="h-5 w-5" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
