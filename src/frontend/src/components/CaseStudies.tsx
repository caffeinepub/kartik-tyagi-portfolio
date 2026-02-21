import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const caseStudies = [
  {
    id: 1,
    title: 'VRH Derma',
    clientType: 'D2C Skincare Brand',
    industry: 'Dermatology',
    duration: 'October 2025 – January 2026',
    problem: 'High acquisition cost, broad audience targeting, inconsistent campaign performance, and weak funnel structure.',
    strategy: [
      'Built TOF–MOF–BOF full funnel structure',
      'Refined audience targeting',
      'Optimized ad creatives',
      'Implemented Meta Pixel tracking',
      'Integrated Flipkart ads',
      'Continuous A/B testing'
    ],
    budget: '₹6,40,000+ total spend (₹1.5L–₹2L monthly)',
    results: [
      '640%+ ROI',
      '40% increase in product sales',
      'Improved lead quality',
      'Stable scalable performance'
    ],
    keyMetrics: [
      '₹6.4L+ Managed',
      '640%+ ROI',
      '40% Sales Growth',
      'Structured funnel execution'
    ],
    beforeAfter: {
      before: [
        'Broad targeting',
        'Unstable performance'
      ],
      after: [
        'Structured funnel',
        'Improved ROI',
        'Consistent growth'
      ]
    }
  },
  {
    id: 2,
    title: 'Award-Wala',
    clientType: 'B2B Recognition & Awards Business',
    industry: 'B2B Services',
    duration: 'January 2026 – February 2026',
    problem: 'Required qualified business owner leads across India.',
    strategy: [
      'Pan-India Meta lead campaigns',
      'Targeted decision-makers & business owners',
      'Refined ad messaging for authority positioning',
      'Structured budget allocation'
    ],
    budget: '₹15,000 campaign spend',
    results: [
      'Consistent B2B lead flow',
      'Improved targeting precision',
      'Better lead quality and filtering'
    ],
    keyMetrics: [
      '₹15K Budget',
      'Pan-India Reach',
      'B2B Lead Flow',
      'Qualified Leads'
    ]
  }
];

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="work"
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
            Case Studies
          </h2>
        </div>
        <p className="text-lg text-dark-grey text-center mb-16 max-w-2xl mx-auto">
          Real campaigns. Real results. Here's how I've helped businesses grow through strategic paid media.
        </p>
        
        <div className="space-y-12">
          {caseStudies.map((study) => (
            <div key={study.id}>
              {/* Case Study Label */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-strong-black">
                  Case Study {study.id}
                </h3>
              </div>

              <Card className="bg-white border border-border shadow-soft hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-strong-black">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Client Info Grid */}
                  <div className="grid md:grid-cols-3 gap-6 pb-6 border-b border-border">
                    <div>
                      <h4 className="font-semibold text-strong-black mb-2">Client Type</h4>
                      <p className="text-dark-grey">{study.clientType}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-strong-black mb-2">Industry</h4>
                      <p className="text-dark-grey">{study.industry}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-strong-black mb-2">Duration</h4>
                      <p className="text-dark-grey">{study.duration}</p>
                    </div>
                  </div>

                  {/* Problem */}
                  <div>
                    <h4 className="font-semibold text-strong-black text-xl mb-3">Problem</h4>
                    <p className="text-dark-grey leading-relaxed">{study.problem}</p>
                  </div>

                  {/* Strategy */}
                  <div>
                    <h4 className="font-semibold text-strong-black text-xl mb-3">Strategy Implemented</h4>
                    <ul className="space-y-2">
                      {study.strategy.map((item, idx) => (
                        <li key={idx} className="text-dark-grey flex items-start">
                          <span className="text-professional-green mr-3 mt-1 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Budget */}
                  <div>
                    <h4 className="font-semibold text-strong-black text-xl mb-3">Budget</h4>
                    <p className="text-dark-grey font-medium">{study.budget}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-strong-black text-xl mb-3">Results Achieved</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-dark-grey flex items-start">
                          <span className="text-professional-green mr-3 mt-1 font-bold">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Metrics */}
                  <div>
                    <h4 className="font-semibold text-strong-black text-xl mb-4">Key Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.keyMetrics.map((metric, idx) => (
                        <div 
                          key={idx} 
                          className="bg-muted p-4 rounded-lg text-center border border-border"
                        >
                          <p className="text-professional-green font-bold text-lg">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Before vs After (only for VRH Derma) */}
                  {study.beforeAfter && (
                    <div>
                      <h4 className="font-semibold text-strong-black text-xl mb-4">Before vs After Comparison</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Before */}
                        <div className="bg-muted/50 p-6 rounded-lg border border-border">
                          <h5 className="font-semibold text-strong-black mb-3">Before:</h5>
                          <ul className="space-y-2">
                            {study.beforeAfter.before.map((item, idx) => (
                              <li key={idx} className="text-dark-grey flex items-start">
                                <span className="text-strong-black/40 mr-3 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* After */}
                        <div className="bg-professional-green/5 p-6 rounded-lg border border-professional-green/20">
                          <h5 className="font-semibold text-professional-green mb-3">After:</h5>
                          <ul className="space-y-2">
                            {study.beforeAfter.after.map((item, idx) => (
                              <li key={idx} className="text-dark-grey flex items-start">
                                <span className="text-professional-green mr-3 mt-1 font-bold">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
