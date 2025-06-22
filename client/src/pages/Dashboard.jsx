
import { useEffect, useState } from "react"
import { auth, db } from "../firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import {
  Search,
  GraduationCap,
  BookOpen,
  Play,
  MessageCircle,
  Settings,
  LogOut,
  Clock,
  Star,
  Users,
  Menu,
  X,
} from "lucide-react"
import img1 from "../assests/jsLogo.png"
import img2 from "../assests/react-logo.svg"

export default function Dashboard() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser

      if (!currentUser) {
        navigate("/")
        return
      }

      try {
        const docRef = doc(db, "users", currentUser.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setUserData(docSnap.data())
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [navigate])

  const handleLogout = async () => {
    try {
      await auth.signOut()
      navigate("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setSidebarOpen(false) // Close sidebar on mobile after navigation
  }

  // Dummy course data
  const purchasedCourses = [
    {
      id: 1,
      title: "Complete React Development Course",
      instructor: "John Smith",
      duration: "12 hours",
      progress: 75,
      rating: 4.8,
      students: 1250,
      thumbnail: img2,
      price: "$99.99",
      purchaseDate: "2024-01-15",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      instructor: "Sarah Johnson",
      duration: "8 hours",
      progress: 45,
      rating: 4.9,
      students: 890,
      thumbnail: img1,
      price: "$79.99",
      purchaseDate: "2024-01-20",
      category: "Programming",
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading dashboard...</div>
      </div>
    )
  }

  const renderMainContent = () => {
    switch (currentPage) {
      case "courses":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
              <p className="text-gray-600">Continue learning with your purchased courses</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {purchasedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-40 md:h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs md:text-sm">
                      {course.progress}% Complete
                    </div>
                  </div>

                  <div className="p-4 md:p-5">
                    <div className="mb-3">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {course.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 line-clamp-2">{course.title}</h3>

                    <p className="text-gray-600 text-sm mb-3">By {course.instructor}</p>

                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-4 flex-wrap gap-2">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="text-xs md:text-sm text-gray-500">
                        Purchased: {new Date(course.purchaseDate).toLocaleDateString()}
                      </div>
                      <button className="bg-green-500 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-green-600 transition-colors">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className="flex items-center justify-center h-full min-h-[50vh]">
            <div className="text-center px-4">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome Back, {userData?.name || "User"}!
              </h1>
              <p className="text-lg md:text-xl text-gray-600">Ready to continue your learning journey?</p>
            </div>
          </div>
        )
    }
  }

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-4 md:p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
          </div>
          <span className="text-white font-bold text-lg md:text-xl">SCHILLZ-UP</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <div className="space-y-2">
          <button
            onClick={() => handleNavClick("dashboard")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left ${
              currentPage === "dashboard"
                ? "bg-green-500 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            <div className="w-5 h-5 md:w-6 md:h-6 bg-white bg-opacity-20 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded"></div>
            </div>
            <span className="font-medium text-sm md:text-base">Dashboard</span>
          </button>

          <button
            onClick={() => handleNavClick("browse")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left ${
              currentPage === "browse" ? "bg-green-500 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Browse Course</span>
          </button>

          <button
            onClick={() => handleNavClick("courses")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left ${
              currentPage === "courses" ? "bg-green-500 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">My Course</span>
          </button>

          <button
            onClick={() => handleNavClick("live")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left ${
              currentPage === "live" ? "bg-green-500 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            <Play className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Live</span>
          </button>

          <button
            onClick={() => handleNavClick("messages")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left ${
              currentPage === "messages"
                ? "bg-green-500 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Message</span>
            <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
          </button>

          <button
            onClick={() => handleNavClick("settings")}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-left ${
              currentPage === "settings"
                ? "bg-green-500 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            <Settings className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Settings</span>
          </button>
        </div>
      </nav>

      {/* Upgrade Section */}
      <div className="p-4 hidden md:block">
        <div className="bg-white rounded-2xl p-4 md:p-6 text-center text-gray-800">
          <h3 className="font-bold text-base md:text-lg mb-2">Upgrade To Pro</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-4">Get access to additional features and content</p>
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 text-sm">
            Upgrade
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg w-full"
        >
          <LogOut className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-base">Log Out</span>
        </button>
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 lg:w-72 bg-gray-800 text-white flex flex-col transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)} className="text-gray-300 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>

              <div>
                <p className="text-gray-600 text-xs md:text-sm">Welcome Back</p>
                <h1 className="text-lg md:text-2xl font-bold text-gray-900">{userData?.name || "User"}</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 md:p-8 overflow-auto">{renderMainContent()}</main>
      </div>
    </div>
  )
}
