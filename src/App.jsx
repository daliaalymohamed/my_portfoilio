import Navbar from './components/navBar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import CurrentlyWorking from './components/currentlyWorkingOnProjects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CurrentlyWorking />
      <Contact />
      <Footer />
    </>
  )
}

export default App
