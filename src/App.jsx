import { lazy } from 'react'

const Navbar = lazy(() => import('./components/navBar'));
const Hero = lazy(() => import('./components/hero'));
const About = lazy(() => import('./components/about'));
const Skills = lazy(() => import('./components/skills'));
const Projects = lazy(() => import('./components/projects'));
const CurrentlyWorking = lazy(() => import('./components/currentlyWorkingOnProjects'));
const DownloadCV = lazy(() => import('./components/downloadCV'));
const Contact = lazy(() => import('./components/contact'));
const Footer = lazy(() => import('./components/footer'));

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CurrentlyWorking />
      <DownloadCV />
      <Contact />
      <Footer />
    </>
  )
}

export default App
