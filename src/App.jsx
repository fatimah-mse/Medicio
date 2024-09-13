import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNav from './components/TopNav/TopNav'
import MedicioNav from './components/MedicioNav/MedicioNav'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import NeedHelp from './components/NeedHelp/NeedHelp'
import AboutUs from './components/AboutUs/AboutUs'
import ServicesSection from './components/ServicesSection/ServicesSection'
import ApponitmentSection from './components/ApponitmentSection/ApponitmentSection'
import DepartmentSection from './components/DepartmentSection/DepartmentSection'
import DoctorsSection from './components/DoctorsSection/DoctorsSection'
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection'
import GallerySection from './components/GallerySection/GallerySection'
import PricingSection from './components/PricingSection/PricingSection'
import FQSection from './components/FQSection/FQSection'
import ContactSection from './components/ContactSection/ContactSection'
import MedicioFooter from './components/MedicioFooter/MedicioFooter'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <>
      <TopNav />
      <MedicioNav />
      <Hero />
      <FeaturedSection />
      <NeedHelp />
      <AboutUs />
      <ServicesSection />
      <ApponitmentSection />
      <DepartmentSection />
      <TestimonialsSection />
      <DoctorsSection />
      <GallerySection />
      <PricingSection />
      <FQSection />
      <ContactSection />
      <MedicioFooter />
    </>
  )
}

export default App
