
import React from 'react';
import ServiceCard from './ServiceCard';
import { Brain, GitMerge, BarChart } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Razvoj AI poslovnih procesa",
      description: "Kreiramo poslovne procese temeljene na AI tehnologijama koje automatiziraju zadatke i povećavaju produktivnost.",
      link: "/services#ai-business-processes",
      delay: 100
    },
    {
      icon: <GitMerge className="h-6 w-6" />,
      title: "Integracija AI servisa",
      description: "Bezbolno implementiramo napredna AI rješenja u vaše postojeće poslovne procese i IT infrastrukturu.",
      link: "/services#ai-integration",
      delay: 200
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "AI strategije za poslovanje",
      description: "Savjetovanje o strateškom korištenju umjetne inteligencije za unapređenje poslovanja i konkurentsku prednost.",
      link: "/services#ai-strategy",
      delay: 300
    }
  ];

  return (
    <section id="featured-services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">Naše usluge</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformirajte poslovanje uz naše AI rješenja</h2>
          <p className="text-muted-foreground text-lg">
            Naše specijalizirane usluge dizajnirane su da integriraju moć umjetne inteligencije 
            u vaše poslovne procese i strategiju.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
