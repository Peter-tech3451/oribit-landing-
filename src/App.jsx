import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Initiatives from './components/Initiatives'
import VisionMission from './components/VisionMission'
import Support from './components/Support'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Initiatives />
      <VisionMission />
      <Support />
      <Footer />
    </div>
  )
}

export default App
