import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App () {
  return (
    <>
      <NavBar />
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
