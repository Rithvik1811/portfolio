import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
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
        <Skills />
        <Publications />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
