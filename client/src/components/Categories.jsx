const Categories = () => {
  const categories = [
    "App Development",
    "Design & Illustration",
    "Business",
    "Languages",
    "Photography",
    "Tech",
    "Marketing",
    "Miscellaneous",
  ]

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-600 mb-6">Categories</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-green-500 hover:text-green-600 transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
