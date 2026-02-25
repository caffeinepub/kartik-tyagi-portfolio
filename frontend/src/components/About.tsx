import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-24 md:py-32 px-6 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header with black stripe accent */}
        <div className="relative pt-8 mb-12">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-strong-black"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-strong-black text-center">
            Experience & Impact
          </h2>
        </div>
        
        {/* Introduction paragraph */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-dark-grey leading-relaxed text-center">
            Performance-driven digital marketer managing ₹6.4L+ in ad spend across Meta and Google Ads for D2C and B2B brands. Built full-funnel campaigns (TOF–MOF–BOF) that increased lead volume up to 3x and delivered ROI up to 640%.
          </p>
        </div>

        {/* Experience blocks */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* VRH Derma */}
          <div className="bg-white border border-border rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
            <h3 className="text-xl font-bold text-strong-black mb-4">
              VRH Derma <span className="text-professional-green">(Meta & Flipkart Ads)</span>
            </h3>
            <ul className="space-y-3 text-dark-grey">
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Managed ₹1.5L–2L/month ad spend</span>
              </li>
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Improved sales by 40% via listing & ad optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Achieved 640% ROI within 2 months</span>
              </li>
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Implemented structured funnel strategy</span>
              </li>
            </ul>
          </div>

          {/* Award-Wala */}
          <div className="bg-white border border-border rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
            <h3 className="text-xl font-bold text-strong-black mb-4">
              Award-Wala <span className="text-professional-green">(B2B Lead Gen)</span>
            </h3>
            <ul className="space-y-3 text-dark-grey">
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Ran Pan-India Meta lead campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Managed ₹15K budget</span>
              </li>
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Targeted decision-makers & business owners</span>
              </li>
            </ul>
          </div>

          {/* PrashantAdvait Foundation */}
          <div className="bg-white border border-border rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
            <h3 className="text-xl font-bold text-strong-black mb-4">
              PrashantAdvait Foundation
            </h3>
            <ul className="space-y-3 text-dark-grey">
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Generated 25–30 leads daily</span>
              </li>
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Raised ₹2.5L+ via outreach campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="text-professional-green mr-2 mt-1">•</span>
                <span>Developed client engagement & lead nurturing systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
