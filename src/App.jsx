import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div style={{ backgroundColor: '#0a0917' }} className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Publications />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
