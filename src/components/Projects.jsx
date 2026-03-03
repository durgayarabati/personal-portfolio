import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Car Rental Platform - MERN Stack",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1374&auto=format&fit=crop",
    description:
      "Full-stack car rental application with JWT authentication, role-based access control, car management, and booking workflows built using secure REST APIs.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    highlights: [
      "JWT authentication with protected routes",
      "Car CRUD operations",
      "Booking system with status tracking",
      "Admin & User role-based dashboards",
    ],
    liveLink: "https://car-rental-mern-psi.vercel.app/",
    githubLink: "https://github.com/durgayarabati/car-rental-mern",
  },
  {
    title: "Inventory Hub - Role-Based Inventory Management System",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1374&auto=format&fit=crop",
    description:
      "Role-based inventory management system to manage products, stock levels, and orders with secure backend APIs and a clean admin dashboard.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "RBAC", "REST API"],
    highlights: [
      "Admin can manage users, products & orders",
      "Stock tracking and filtering system",
      "Search functionality",
      "Responsive dashboard UI",
    ],
    liveLink: "https://inventoryhub-mern.vercel.app/",
    githubLink: "https://github.com/durgayarabati/car-rental-mern",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-6 pt-4 border-t">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 hover:text-black font-medium transition"
                  >
                    <Github className="h-5 w-5" />
                    Code
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