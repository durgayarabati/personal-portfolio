import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Profilepic from '../assets/prasad-portfolio.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-violet-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-indigo-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Profile Image with Premium Animation */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="relative w-80 h-80 rounded-full">

                {/* Spinning Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-[spin_10s_linear_infinite]" />

                {/* Ring Gap */}
                <div className="absolute inset-[10px] rounded-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />

                {/* Soft Glow */}
                <div className="absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                {/* Image */}
                <div className="absolute inset-[18px] rounded-full overflow-hidden 
bg-gradient-to-br from-gray-200 to-gray-300 
shadow-2xl ring-2 ring-white/20
transition-all duration-500 ease-out 
hover:scale-[1.05] hover:-translate-y-2">

  <img
    src={Profilepic}
    alt="Yarabati Durga Prasad"
    className="w-full h-full object-cover object-[center_25%]
    transition-transform duration-500 
    hover:scale-110 "
  />

</div>

                 </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-10 mb-6">
              <span className="block" >Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Yarabati Durga Prasad
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
              Full Stack Developer | MERN Stack | AI Enthusiast
            </h2>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Full Stack Developer with hands-on experience in building responsive and scalable web
              applications using React.js, Node.js, Express.js, and MongoDB. Skilled in JavaScript,
              REST APIs, and modern UI development, with a growing interest in AI-powered applications
              and problem-solving. Actively seeking opportunities to contribute, learn, and grow in a
              development team.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://drive.google.com/file/d/18lSUsQ5k7c0hOENJZVgPR0IToXTIXR87/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </button>
              </a>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/durgayarabati"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/prasad-yarabati"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:prasadyarabati16@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;