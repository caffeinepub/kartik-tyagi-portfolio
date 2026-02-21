import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-white">
      {/* Content container - centered with generous spacing */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile photo with circular background */}
        <div 
          className={`relative inline-block mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Large soft circular background with floating animation */}
          <div 
            className="absolute inset-0 -z-10 animate-float"
            style={{
              width: '400px',
              height: '400px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div 
              className="w-full h-full rounded-full bg-professional-green/20"
              style={{
                filter: 'blur(2px)',
              }}
            />
          </div>

          {/* Profile photo with shadow */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <img
              src="/assets/generated/profile-photo.dim_400x400.png"
              alt="Kartik Tyagi"
              className="w-full h-full object-cover rounded-full shadow-lg"
              style={{
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>

        {/* Headline structure with staggered animations */}
        <div 
          className={`space-y-2 mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main headline - large and bold */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-strong-black tracking-tight">
            I'm <span className="text-professional-green">Kartik Tyagi</span>,
          </h1>

          {/* Second line */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-strong-black tracking-tight">
            Digital Marketer – Paid Ads & Growth
          </h2>
        </div>

        {/* Subtext - sharp and ad-focused */}
        <p 
          className={`text-base md:text-lg text-dark-grey mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          I help brands scale through structured Meta and Google Ads campaigns focused on ROI, lead generation, and conversion growth.
        </p>

        {/* Buttons - centered with smooth transitions */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Primary button - filled green */}
          <Button 
            size="lg"
            className="bg-professional-green hover:bg-professional-green/90 text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            onClick={() => scrollToSection('work')}
          >
            View My Work
          </Button>

          {/* Second button - opens resume in new tab */}
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-strong-black text-strong-black hover:bg-professional-green hover:text-white hover:border-professional-green px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
            asChild
          >
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>

          {/* Third button - outlined style */}
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-strong-black/20 text-strong-black hover:bg-professional-green hover:text-white hover:border-professional-green px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 hover:shadow-soft hover:-translate-y-1"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
