import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Waves } from './components/ui/waves-background'
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'
import FlowChartDesigner from './pages/FlowChartDesigner'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-clay-background">
        <Waves
          lineColor="rgba(0, 0, 0, 0.08)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
        <div className="relative z-10">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/flow" element={<FlowChartDesigner />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App