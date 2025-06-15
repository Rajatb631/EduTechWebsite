import { Link } from "react-router-dom"
import { useState } from "react"
import { ChevronDown, User } from 'lucide-react'

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setActiveDropdown(null) // Close any open dropdowns when toggling mobile menu
  }

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleClickOutside}
        />
      )}
      
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link 
                  to="/" 
                  className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                  SCHILLZ-UP
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {/* Courses Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("courses")}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeDropdown === "courses" 
                      ? "text-green-600 bg-green-50" 
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  }`}
                >
                  Courses
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "courses" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "courses" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                        Popular Courses
                      </div>
                      <a
                        href="#"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          🤖
                        </div>
                        <div>
                          <div className="font-medium">AI/ML</div>
                          <div className="text-xs text-gray-500">Machine Learning & AI</div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                          🐍
                        </div>
                        <div>
                          <div className="font-medium">Python</div>
                          <div className="text-xs text-gray-500">Programming Language</div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          📊
                        </div>
                        <div>
                          <div className="font-medium">DSA</div>
                          <div className="text-xs text-gray-500">Data Structures & Algorithms</div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Tutorials Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("webdev")}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeDropdown === "webdev" 
                      ? "text-green-600 bg-green-50" 
                      : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                  }`}
                >
                  Tutorials
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "webdev" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "webdev" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                        Learn & Practice
                      </div>
                      <Link
                        to="/DsaTutorial"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                          🔗
                        </div>
                        <div>
                          <div className="font-medium">DSA Tutorial</div>
                          <div className="text-xs text-gray-500">Complete DSA Guide</div>
                        </div>
                      </Link>
                      <a
                        href="#"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          ⚛️
                        </div>
                        <div>
                          <div className="font-medium">React</div>
                          <div className="text-xs text-gray-500">Frontend Framework</div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Login Button - Black Box */}
              <button className="bg-black text-white px-6 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </div>
              </button>

              {/* Mobile menu button */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-gray-500 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Only show when mobileMenuOpen is true */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              {/* Mobile Courses Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("mobile-courses")}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Courses
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "mobile-courses" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "mobile-courses" && (
                  <div className="mt-2 ml-4 space-y-1">
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      AI/ML
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      Python
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      DSA
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Tutorials Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("mobile-tutorials")}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Tutorials
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "mobile-tutorials" ? "rotate-180" : ""
                  }`} />
                </button>
                {activeDropdown === "mobile-tutorials" && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link 
                      to="/DsaTutorial" 
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      DSA Tutorial
                    </Link>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      React
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header