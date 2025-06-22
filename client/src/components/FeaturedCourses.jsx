import img1 from "../assests/pythonlogo.png"
import img2 from "../assests/MachineLearningLogo.png"
import img3 from "../assests/react-logo.svg"

const FeaturedCourses = () => {
  
  const courses = [
    {
      id: 1,
      title: "Complete React Development Course",
      image: img3,
      category: "Web Development",
    },
    {
      id: 2,
      title: "Python for Data Science",
      image: img1,
      category: "Programming",
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      image: img2,
      category: "AI/ML",
    },
  ]

  

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-lg text-gray-600">
            Click a project to see what you'll be creating or view our{" "}
            <a href="#" className="text-green-600 hover:text-green-700 underline">
              marketplace
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-3">
                  {course.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <button className="text-green-600 hover:text-green-700 font-medium">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses
