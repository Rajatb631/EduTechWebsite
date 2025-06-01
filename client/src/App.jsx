import Header from "./components/Header"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import FeaturedCourses from "./components/FeaturedCourses"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categories />
      <FeaturedCourses />
      <Footer />
    </div>
  )
}

export default App
