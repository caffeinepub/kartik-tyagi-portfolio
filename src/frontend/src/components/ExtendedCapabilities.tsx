import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const capabilities = [
  'Creative Strategy Development',
  'Video Editing for Ads',
  'Meta Pixel & Conversion Tracking Setup',
  'Analytics & Event Tracking Implementation',
];

const ExtendedCapabilities = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-24 md:py-32 px-6 bg-muted transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header with black stripe accent */}
        <div className="relative pt-8 mb-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-strong-black"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-strong-black text-center">
            Extended Capabilities
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white border border-border p-8 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <h3 className="text-lg font-semibold text-strong-black leading-snug group-hover:text-professional-green transition-colors duration-300">
                {capability}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtendedCapabilities;
