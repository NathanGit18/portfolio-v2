import Navbar from './components/Navbar'
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="bento-grid">
        <BentoGrid />
      </main>
    </div>  
  )
}

export default App
