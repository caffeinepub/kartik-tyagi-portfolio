import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reasons = [
  {
    title: 'Data-Driven Approach',
    description: 'Every decision is backed by data. I track, test, and optimize campaigns based on real performance metrics, not assumptions.',
  },
  {
    title: 'Clear Communication',
    description: 'You will always know what is happening with your campaigns. Regular updates, transparent reporting, and honest feedback.',
  },
  {
    title: 'ROI-Focused',
    description: 'I focus on metrics that matter to your business: conversions, revenue, and sustainable growth, not just vanity metrics.',
  },
  {
    title: 'Continuous Testing',
    description: 'Markets change, audiences evolve. I continuously test new strategies, creatives, and approaches to stay ahead.',
  },
  {
    title: 'Strategic Optimization',
    description: 'Beyond day-to-day management, I identify opportunities for improvement across your entire marketing funnel.',
  },
];

const WhyWorkWithMe = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-24 md:py-32 px-6 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header with black stripe accent */}
        <div className="relative pt-8 mb-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-strong-black"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-strong-black text-center">
            Why Work With Me
          </h2>
        </div>
        <p className="text-lg text-dark-grey text-center mb-16 max-w-2xl mx-auto">
          I bring a results-focused approach to every campaign.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-border p-8 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-strong-black mb-4">
                {reason.title}
              </h3>
              <p className="text-dark-grey leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
