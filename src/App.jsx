import Navbar from './components/Navbar'
import BentoGrid from './components/BentoGrid';
import Capabilities from './components/Capabilities';
import Education from './components/Education';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="bento-grid">
        <BentoGrid />
      </main>

      <Capabilities />
      <Education />
    </div>  
  )
}

export default App
