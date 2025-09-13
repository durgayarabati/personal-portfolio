<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Profile Image */}
  <div className="flex justify-center lg:justify-end order-1">
    <div className="relative">
      <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
        <div className="w-72 h-72 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full overflow-hidden">
            <img
              src={Profilepic}
              alt="Durga Prasad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
    </div>
  </div>

  {/* Content */}
  <div className="text-center lg:text-left order-2">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
      <span className="block">Hi, I'm</span>
      <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Yarabati Durga Prasad
      </span>
    </h1>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
      React JS Developer
    </h2>

    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
      Passionate full-stack developer with expertise in React, JavaScript, and modern web technologies.
      I create beautiful, responsive web applications that deliver exceptional user experiences.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
      <a
        href="https://drive.google.com/file/d/1tEijqJGzZYRGjIsYqu7s_-DmaWbKLn6O/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          <Download className="mr-2 h-5 w-5" />
          Download Resume
        </button>
      </a>

      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="inline-flex items-center px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
      >
        <Mail className="mr-2 h-5 w-5" />
        Contact Me
      </button>
    </div>

    {/* Social Links */}
    <div className="flex gap-4 justify-center lg:justify-start">
      <a
        href="https://github.com"
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
