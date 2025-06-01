const Hero = () => {
  return (
    <section className="relative bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Students learning"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Lifetime access to project-based video courses
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            All of our courses have a final goal so you'll always be creating something awesome, from gorgeous web
            interfaces to ninja-level marketing skills to proficiency in a language.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. illustration, app development, excel"
                className="w-full px-6 py-4 rounded-full text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-2 top-2 bg-green-600 text-white px-8 py-2 rounded-full hover:bg-green-700 transition-colors">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
