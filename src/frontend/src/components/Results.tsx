import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

type MetricFormat = 'number' | 'currency' | 'decimal';

interface Metric {
  label: string;
  value: number;
  prefix: string;
  suffix: string;
  format: MetricFormat;
}

const metrics: Metric[] = [
  { label: 'Ad Spend Managed', value: 700000, prefix: '₹', suffix: '+', format: 'currency' },
  { label: 'Lead Growth', value: 3, prefix: '', suffix: 'x', format: 'number' },
  { label: 'ROI Delivered', value: 640, prefix: '', suffix: '%+', format: 'number' },
  { label: 'Sales Growth (E-commerce)', value: 40, prefix: '', suffix: '%', format: 'number' },
];

const Results = () => {
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
            Results That Matter
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ metric, isVisible }: { metric: Metric; isVisible: boolean }) => {
  const count = useCounterAnimation(metric.value, 2000, isVisible, metric.format);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-professional-green mb-3">
        {metric.prefix}{count}{metric.suffix}
      </div>
      <div className="text-lg text-strong-black font-medium">
        {metric.label}
      </div>
    </div>
  );
};

export default Results;
