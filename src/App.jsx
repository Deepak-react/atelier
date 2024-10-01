// import LandingPage from "../componets/landing-page"
// import Header from "../componets/header"
// import FirstSection from "../componets/first-section"
// import Services from "../componets/services"
// import WhatWeDo from "../componets/what-we-de"
// import HowWeWork from "../componets/how-we-work"
// import BenefitsWWU from "../componets/benefits-of-work-with-us"
// import ContentMarketing from "../componets/content-marketing"
// import Footer from "../componets/footer"
// import Testimonial from "../componets/testimonial"
// import DiscoverUs from "../componets/discover-us"
// import Contacts from "../componets/contacts"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import ServiceOne from "../pages/ServiceOne"
import SEO from "../pages/SEO"
import SMM from "../pages/SMM"
import UIUX from "../pages/UI-UX"
import MobileAppDevelopment from "../pages/MobileAppDevelopment"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import AOS from 'aos';

import 'aos/dist/aos.css'; 
// ..
AOS.init();


function App(){
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/top-seo-ranking-specialist" element={<SEO />} />
        <Route path="/ServiceOne" element={<ServiceOne />} />
        <Route path="/best-social-media-marketing-advertising-agency" element={<SMM />} />
        <Route path="/best-creative-ui/ux-design-service-company" element={<UIUX />} />
        <Route path="/mobile-app-development-company-india" element={<MobileAppDevelopment />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}
export default App
