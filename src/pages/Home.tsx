import Hero from "@/components/Hero"
import About from "@/components/About"
import Courses from "@/components/Courses"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default Home
