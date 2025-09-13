<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Content */}
  <div className="text-center lg:text-left order-2 lg:order-1">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
      <span className="block">Hi, I'm</span>
      <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Yarabati Durga Prasad
      </span>
    </h1>
    {/* rest of your content */}
  </div>

  {/* Profile Image */}
  <div className="flex justify-center lg:justify-end order-1 lg:order-2">
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
</div>
