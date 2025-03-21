
import React from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import { Brain, GitMerge, BarChart, Cpu, Database, FileText, Bot, Code, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Main services array
  const mainServices = [
    {
      id: 'ai-business-processes',
      icon: <Brain className="h-6 w-6" />,
      title: "Razvoj AI poslovnih procesa",
      description: "Razvijamo i implementiramo poslovne procese temeljene na umjetnoj inteligenciji koji automatiziraju rutinske zadatke, optimiziraju resurse i poboljšavaju donošenje odluka.",
      subservices: [
        {
          icon: <Cpu className="h-6 w-6" />,
          title: "Automatizacija zadataka",
          description: "Automatiziramo ponavljajuće i rutinske zadatke korištenjem AI kako biste oslobodili vrijedne ljudske resurse."
        },
        {
          icon: <Database className="h-6 w-6" />,
          title: "Analiza podataka",
          description: "Implementiramo sustave za dubinsku analizu podataka i izvlačenje korisnih uvida za donošenje boljih poslovnih odluka."
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: "Optimizacija procesa",
          description: "Analiziramo i poboljšavamo postojeće procese koristeći AI tehnologije za povećanje učinkovitosti i smanjenje troškova."
        }
      ]
    },
    {
      id: 'ai-integration',
      icon: <GitMerge className="h-6 w-6" />,
      title: "Integracija AI servisa",
      description: "Implementiramo napredna AI rješenja u vaše postojeće poslovne procese i IT infrastrukturu, osiguravajući bezbolnu tranziciju i maksimalnu iskoristivost.",
      subservices: [
        {
          icon: <Bot className="h-6 w-6" />,
          title: "Virtualni asistenti",
          description: "Implementacija chatbotova i virtualnih asistenata za automatizaciju komunikacije s klijentima i internih procesa."
        },
        {
          icon: <Code className="h-6 w-6" />,
          title: "API integracije",
          description: "Povezivanje AI servisa s vašim postojećim aplikacijama i sustavima kroz API integracije."
        },
        {
          icon: <Database className="h-6 w-6" />,
          title: "Data pipeline optimizacija",
          description: "Poboljšanje procesa prikupljanja, obrade i analize podataka za maksimalnu iskoristivost AI sustava."
        }
      ]
    },
    {
      id: 'ai-strategy',
      icon: <BarChart className="h-6 w-6" />,
      title: "AI strategije za poslovanje",
      description: "Razvijamo sveobuhvatne strategije za implementaciju AI rješenja u vašem poslovanju, osiguravajući dugoročnu konkurentsku prednost i održivi rast.",
      subservices: [
        {
          icon: <MessageSquare className="h-6 w-6" />,
          title: "Strateško savjetovanje",
          description: "Savjetovanje o strateškoj implementaciji AI rješenja prilagođenih specifičnim potrebama vašeg poslovanja."
        },
        {
          icon: <Brain className="h-6 w-6" />,
          title: "AI edukacija",
          description: "Edukacija vašeg tima o AI tehnologijama i njihovoj primjeni u vašem poslovnom kontekstu."
        },
        {
          icon: <BarChart className="h-6 w-6" />,
          title: "ROI analiza",
          description: "Analiza potencijalnog povrata investicije za različita AI rješenja u vašem poslovnom okruženju."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
        
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Naše usluge
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Implementacija <span className="text-gradient">AI rješenja</span> za vaše poslovanje
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Pružamo specijalizirane usluge razvoja, integracije i optimizacije AI rješenja za poboljšanje vaših poslovnih procesa.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services with Subservices */}
      {mainServices.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className={`section-padding ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                  Usluga {index + 1}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {service.description}
                </p>
                <div className="flex items-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center h-10 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-ring"
                  >
                    Zatražite ponudu
                  </Link>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="grid grid-cols-1 gap-4">
                  {service.subservices.map((subservice, subIndex) => (
                    <div key={subIndex} className="glass-card rounded-xl p-6 hover-card">
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                          {subservice.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{subservice.title}</h3>
                          <p className="text-muted-foreground">{subservice.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Naš proces
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kako radimo s klijentima</h2>
            <p className="text-muted-foreground text-lg">
              Naš pristup osigurava transparentnost, efikasnost i rezultate u svakom projektu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analiza",
                description: "Detaljno analiziramo vaše trenutne poslovne procese i identificiramo prilike za AI implementaciju."
              },
              {
                step: "02",
                title: "Strategija",
                description: "Razvijamo prilagođenu strategiju implementacije AI rješenja za vaše specifične potrebe."
              },
              {
                step: "03",
                title: "Implementacija",
                description: "Implementiramo AI rješenja i integriramo ih s vašim postojećim sustavima i procesima."
              },
              {
                step: "04",
                title: "Optimizacija",
                description: "Kontinuirano pratimo, evaluiramo i optimiziramo implementirana rješenja za maksimalne rezultate."
              }
            ].map((item, index) => (
              <div key={index} className="relative glass-card rounded-xl p-6 hover-card">
                <div className="absolute -top-5 -left-5 w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Započnite transformaciju svog poslovanja danas
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Kontaktirajte nas i saznajte kako naše AI usluge mogu pomoći vašem poslovanju.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors focus-ring"
              >
                Zatražite konzultaciju
              </Link>
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center h-12 px-8 text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors focus-ring"
              >
                Pregledajte pakete
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
