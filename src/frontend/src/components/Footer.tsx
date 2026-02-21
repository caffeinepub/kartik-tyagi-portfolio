import { SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'kartik-tyagi-portfolio';

  return (
    <footer className="bg-strong-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Kartik Tyagi</h3>
            <p className="text-white/70">Performance Marketing Specialist</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-professional-green transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-professional-green transition-colors duration-300"
              aria-label="Instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 w-full">
            <p className="text-white/60 text-sm mb-2">
              © {currentYear} Kartik Tyagi. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center justify-center gap-1">
              Built with <Heart className="w-4 h-4 text-professional-green fill-professional-green" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-professional-green hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
