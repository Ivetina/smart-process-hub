
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
  hoverEffect?: boolean;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  link, 
  delay = 0,
  hoverEffect = true
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card rounded-xl p-6 opacity-0 translate-y-4 transition-all duration-700 delay-100",
        hoverEffect && "hover-card"
      )}
    >
      <div className="mb-4 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        to={link} 
        className="group inline-flex items-center text-sm font-medium text-primary animated-underline"
      >
        Saznaj više
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
