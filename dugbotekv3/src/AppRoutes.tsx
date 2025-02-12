import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import CaseStudies from './pages/CaseStudies'
import SuccessPage from './pages/SuccessPage'
import BlogPage from './pages/Blog'
import BlogPost from './pages/BlogPost'
import PrivacyPolicy from './pages/PrivacyPolicy'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div className="container py-8">About page coming soon</div>} />
      <Route path="/services" element={<div className="container py-8">Services coming soon</div>} />
      <Route path="/contact" element={<div className="container py-8">Contact coming soon</div>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<div className="container py-8">404 - Page not found</div>} />
    </Routes>
  )
}

export default AppRoutes