import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Waves } from './components/ui/waves-background'
import AppRoutes from './AppRoutes'

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
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  )
}

export default App