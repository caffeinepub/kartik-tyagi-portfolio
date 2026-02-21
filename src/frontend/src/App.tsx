import Hero from './components/Hero';
import About from './components/About';
import CoreSkills from './components/CoreSkills';
import ExtendedCapabilities from './components/ExtendedCapabilities';
import Results from './components/Results';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <CoreSkills />
      <ExtendedCapabilities />
      <Results />
      <CaseStudies />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
