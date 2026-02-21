import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SiLinkedin, SiInstagram } from 'react-icons/si';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      id="contact"
      ref={ref}
      className={`py-24 md:py-32 px-6 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section header with black stripe accent */}
        <div className="relative pt-8 mb-6">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-strong-black"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-strong-black text-center">
            Let's Build Sustainable Growth
          </h2>
        </div>
        <p className="text-lg text-dark-grey text-center mb-12">
          Ready to scale your paid campaigns? Let's talk about your goals.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-border">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-strong-black font-medium">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-strong-black/20 focus:border-professional-green focus:ring-professional-green"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-strong-black font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-strong-black/20 focus:border-professional-green focus:ring-professional-green"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-strong-black font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-strong-black/20 focus:border-professional-green focus:ring-professional-green min-h-[150px]"
              required
            />
          </div>

          <Button 
            type="submit"
            size="lg"
            className="w-full bg-professional-green hover:bg-professional-green/90 text-white py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Start a Conversation
          </Button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dark-grey hover:text-professional-green transition-colors duration-300"
          >
            <SiLinkedin className="w-6 h-6" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dark-grey hover:text-professional-green transition-colors duration-300"
          >
            <SiInstagram className="w-6 h-6" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
