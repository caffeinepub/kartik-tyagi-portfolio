import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    title: 'Paid Media Management',
    description: 'End-to-end campaign management that drives consistent, scalable growth while maintaining efficiency and profitability.',
  },
  {
    title: 'Campaign Strategy & Setup',
    description: 'Strategic campaign architecture designed to maximize performance from day one, with proper tracking and optimization frameworks in place.',
  },
  {
    title: 'Funnel Optimization',
    description: 'Identify and eliminate bottlenecks in your conversion funnel to improve lead quality and reduce acquisition costs.',
  },
  {
    title: 'Performance Consulting',
    description: 'Expert guidance on paid media strategy, budget allocation, and growth opportunities tailored to your business goals.',
  },
  {
    title: 'Landing Page Review & Audit',
    description: 'Comprehensive analysis of your landing pages with actionable recommendations to improve conversion rates and campaign performance.',
  },
  {
    title: 'Ad Creative Direction',
    description: 'Strategic guidance on ad creative that resonates with your audience and drives action, backed by testing and data.',
  },
];

const Services = () => {
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
        <div className="relative pt-8 mb-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-strong-black"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-strong-black text-center">
            Services
          </h2>
        </div>
        <p className="text-lg text-dark-grey text-center mb-16 max-w-2xl mx-auto">
          Focused on outcomes that matter to your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-bold text-strong-black mb-4 group-hover:text-professional-green transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-dark-grey leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
