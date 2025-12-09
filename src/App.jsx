import Navbar from './components/Navbar'
import BentoGrid from './components/BentoGrid';
import Capabilities from './components/Capabilities';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="bento-grid">
        <BentoGrid />
      </main>

      <Capabilities />
    </div>  
  )
}

export default App
