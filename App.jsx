import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import CourseOverview from './components/CourseOverview'
import InteractiveDemo from './components/InteractiveDemo'
import Curriculum from './components/Curriculum'
import Resources from './components/Resources'
import Community from './components/Community'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CourseOverview />
      <InteractiveDemo />
      <Curriculum />
      <Resources />
      <Community />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App

