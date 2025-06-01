import Header from "../src/components/Header"
import Hero from "../src/components/Hero"
import Categories from "../src/components/Categories"
import FeaturedCourses from "../src/components/FeaturedCourses"
import Footer from "../src/components/Footer"

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <FeaturedCourses />
      <Footer />
    </div>
  )
}
