
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import ContactForm from '@/components/ContactForm';
import { Brain, Zap, BarChart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Services */}
      <FeaturedServices />
      
      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Zašto odabrati nas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prednosti naših AI rješenja
            </h2>
            <p className="text-muted-foreground text-lg">
              Koristimo najnovije tehnologije i metodologije za implementaciju AI rješenja koja donose mjerljive rezultate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Brain />,
                title: "Stručnost",
                description: "Specijalizirani smo za najnovije AI tehnologije i njihovu primjenu u poslovnim procesima."
              },
              {
                icon: <Zap />,
                title: "Učinkovitost",
                description: "Naša rješenja značajno povećavaju produktivnost i smanjuju operativne troškove."
              },
              {
                icon: <BarChart />,
                title: "Rezultati",
                description: "Usmjereni smo na mjerljive rezultate i povrat investicije za vaše poslovanje."
              },
              {
                icon: <Users />,
                title: "Podrška",
                description: "Kontinuirana podrška i savjetovanje tijekom cijelog procesa implementacije i nakon."
              }
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover-card">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 -z-10" />
        
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Spremni ste transformirati svoje poslovanje uz AI?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Kontaktirajte nas danas i započnite svoje putovanje prema inovativnijim i efikasnijim poslovnim procesima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-white text-blue-700 rounded-md hover:bg-blue-50 transition-colors focus-ring"
              >
                Zatražite konzultaciju
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center h-12 px-8 text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors focus-ring"
              >
                Istražite naše usluge
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                Kontaktirajte nas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pošaljite nam upit
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Javite nam se s vašim pitanjima ili zahtjevima, i naš tim će vam odgovoriti u najkraćem mogućem roku.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Ekspertiza u AI i poslovnim procesima</h3>
                    <p className="text-sm text-muted-foreground">
                      Specijalizirani smo za integraciju AI rješenja koja optimiziraju vaše poslovne procese.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Personalizirani pristup</h3>
                    <p className="text-sm text-muted-foreground">
                      Uzimamo u obzir specifične potrebe vašeg poslovanja i industrije.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Brza implementacija</h3>
                    <p className="text-sm text-muted-foreground">
                      Efikasno implementiramo rješenja uz minimalne poremećaje vašeg poslovanja.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
