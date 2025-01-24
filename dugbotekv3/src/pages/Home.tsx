import Hero from '../components/sections/Hero'
import ProjectSection from '../components/sections/ProjectSection'
import ProviderGrid from '../components/sections/ProviderGrid'
import AboutSection from '../components/sections/AboutSection'
import SuccessMetrics from '../components/SuccessMetrics'
import { serviceProviders } from '../data/serviceProviders'

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectSection />
      <SuccessMetrics />
      <ProviderGrid providers={serviceProviders} />
      <AboutSection />
    </div>
  )
}

export default Home 