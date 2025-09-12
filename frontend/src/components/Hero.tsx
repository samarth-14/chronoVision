import { Button } from './ui/button';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { ArrowRight, Sparkles, Eye, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeroProps {
  onARViewClick: () => void;
}

export function Hero({ onARViewClick }: HeroProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        const heroHeight = window.innerHeight;
        const scrollProgress = Math.min(scrolled / heroHeight, 1);
        
        // Calculate zoom out effect (starts at scale 1.2, zooms out to 1.0)
        const scale = 1.2 - (scrollProgress * 0.2);
        
        // Apply transform with smooth transition
        backgroundRef.current.style.transform = `scale(${scale})`;
      }
    };

    // Set initial scale
    if (backgroundRef.current) {
      backgroundRef.current.style.transform = 'scale(1.2)';
      backgroundRef.current.style.transition = 'transform 0.1s ease-out';
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed Background with Zoom Animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"></div>
        <div 
          ref={backgroundRef}
          className="absolute inset-0 w-full h-full"
          style={{ transformOrigin: 'center center' }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1649147313351-c86537fda0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWRhcm5hdGglMjB0ZW1wbGUlMjBoaW1hbGF5YXxlbnwxfHx8fDE3NTc0NDI1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Kedarnath Temple in Himalayas"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-3 h-3 bg-accent rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-40 left-40 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-60 right-20 w-2 h-2 bg-accent rounded-full animate-ping opacity-80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3 mb-8 animate-fade-in">
          <div className="relative">
            <Sparkles className="h-10 w-10 text-accent animate-spin-slow" />
            <Star className="absolute top-0 right-0 h-4 w-4 text-secondary animate-pulse" />
          </div>
          <span className="text-xl tracking-wide bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent font-semibold">
            Sacred Digital Journey
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight font-bold">
          <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient">
            Divine Temples
          </span>
          <br />
          <span className="text-white drop-shadow-2xl">
            of Ancient India
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto font-medium leading-relaxed">
          Experience the spiritual magnificence of India's most sacred temples through immersive technology and ancient wisdom
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          
          <Button 
            onClick={onARViewClick}
            size="lg" 
            className="bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent text-accent-foreground px-10 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 transition-transform"
          >
            <Eye className="mr-3 h-6 w-6" />
            AR Experience
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
            <div className="text-2xl font-bold text-accent">3</div>
            <div className="text-sm text-gray-300">Sacred Temples</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
            <div className="text-2xl font-bold text-secondary">1000+</div>
            <div className="text-sm text-gray-300">Years History</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
            <div className="text-2xl font-bold text-primary">∞</div>
            <div className="text-sm text-gray-300">Spiritual Energy</div>
          </div>
        </div>
      </div>

    </section>
  );
}