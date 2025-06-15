import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">ProLearning</h3>
            <p className="text-gray-400">EdTech platform for course instructors and students.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400">
                  AI/ML
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Python
                </a>
              </li>
              <li>
                <Link to="/DsaTutorial" className="hover:text-green-400">
                  DSA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Web Development</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400">
                  Next.js
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  React
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tags</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">edtech</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">courses</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">online courses</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">mooc</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">video-course</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ProLearning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
