
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('featured-services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden pt-20 md:pt-0" ref={heroRef}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/80 -z-10" />
      
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center min-h-[90vh] py-16 md:py-20">
          {/* Removed the EyeLogo component that was here */}
          
          {/* Chip */}
          <div 
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-6 delay-100"
          >
            AI Integracija u poslovne procese
          </div>
          
          {/* Main Heading */}
          <h1 
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 text-4xl md:text-5xl lg:text-7xl font-display font-bold text-center mb-6 tracking-tight delay-200"
          >
            <span className="block">Transformirajte svoje</span>
            <span className="text-gradient">poslovanje uz AI</span>
          </h1>
          
          {/* Subheading */}
          <p 
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 text-xl md:text-2xl text-muted-foreground text-center max-w-[800px] mb-8 delay-300"
          >
            Specijalizirani smo za integraciju umjetne inteligencije u vaše poslovne procese, 
            omogućujući vam optimizaciju poslovanja i bolje poslovne rezultate.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 flex flex-col sm:flex-row gap-4 mb-16 delay-400"
          >
            <Link 
              to="/services"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus-ring"
            >
              Istražite naše usluge
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-8 text-base font-medium border border-input bg-background hover:bg-muted rounded-md transition-colors focus-ring"
            >
              Zatražite konzultaciju
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={scrollToNext}
            className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground focus-ring rounded-full p-2 delay-500"
          >
            <span className="text-sm font-medium mb-2">Saznaj više</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
