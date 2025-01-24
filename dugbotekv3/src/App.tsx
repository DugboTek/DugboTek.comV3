import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense, useState, useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import CaseStudiesPage from './pages/case-studies/index'
import './styles/globals.css'

// Create a client
const queryClient = new QueryClient()

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('App component mounted')
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-clay-background">
        <div className="text-clay-text">Loading...</div>
      </div>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/about" element={<div className="container py-8">About page coming soon</div>} />
              <Route path="/services" element={<div className="container py-8">Services coming soon</div>} />
              <Route path="/contact" element={<div className="container py-8">Contact coming soon</div>} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<div className="container py-8">404 - Page not found</div>} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </QueryClientProvider>
  )
}

export default App