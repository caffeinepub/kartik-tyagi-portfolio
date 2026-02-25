import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ImageLightbox from './ImageLightbox';

interface PerformanceImage {
  src: string;
  alt: string;
}

interface PerformanceGalleryProps {
  images: PerformanceImage[];
}

const PerformanceGallery = ({ images }: PerformanceGalleryProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h4 className="font-semibold text-strong-black text-xl mb-4">Performance Gallery</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg border-2 border-strong-black bg-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              onClick={() => openLightbox(index)}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-full text-strong-black font-medium">
                  Click to enlarge
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
};

export default PerformanceGallery;
