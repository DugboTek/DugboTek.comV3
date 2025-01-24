import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import CaseStudies from './pages/CaseStudies'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div className="container py-8">About page coming soon</div>} />
      <Route path="/services" element={<div className="container py-8">Services coming soon</div>} />
      <Route path="/contact" element={<div className="container py-8">Contact coming soon</div>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="*" element={<div className="container py-8">404 - Page not found</div>} />
    </Routes>
  )
}

export default AppRoutes 