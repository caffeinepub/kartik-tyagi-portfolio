import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Client Name 1',
    role: 'Founder, Company Name',
    content: 'Working with Kartik transformed our paid media strategy. His data-driven approach and attention to detail helped us achieve a 3x increase in qualified leads while reducing our cost per acquisition.',
  },
  {
    name: 'Client Name 2',
    role: 'Marketing Director, Brand Name',
    content: 'Kartik\'s expertise in Meta and Google Ads is exceptional. He not only managed our campaigns but also educated our team on best practices. The ROI speaks for itself.',
  },
  {
    name: 'Client Name 3',
    role: 'CEO, E-commerce Brand',
    content: 'The structured approach Kartik brought to our campaigns made all the difference. Clear communication, consistent results, and a genuine commitment to our success.',
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={ref}
      className={`py-24 md:py-32 px-6 bg-muted transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header with black stripe accent */}
        <div className="relative pt-8 mb-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-strong-black"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-strong-black text-center">
            Client Testimonials
          </h2>
        </div>
        
        <div className="relative">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-border">
            <p className="text-lg md:text-xl text-dark-grey leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-strong-black text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-dark-grey">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-2 border-strong-black/20 hover:bg-professional-green hover:text-white hover:border-professional-green transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-2 border-strong-black/20 hover:bg-professional-green hover:text-white hover:border-professional-green transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-professional-green w-8'
                    : 'bg-strong-black/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
