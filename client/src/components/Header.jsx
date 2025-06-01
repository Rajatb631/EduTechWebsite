"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-600">ProLearning</h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("courses")}
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Courses
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "courses" && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      AI/ML
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Python
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      DSA
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Web Development Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("webdev")}
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Web Development
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "webdev" && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Next.js
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      React
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
              Learn
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
              Resources
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
              Login
            </button>
            <button className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact Sales
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
              Get started — it's free
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
