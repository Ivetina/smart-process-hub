
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Award, Brain, Briefcase, CheckCircle, Users, BookOpen, ArrowRight, Code, Globe } from 'lucide-react';

const About = () => {
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
              O nama
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Stručnjaci za <span className="text-gradient">AI integraciju</span> u poslovne procese
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Pomažemo tvrtkama da iskoriste puni potencijal umjetne inteligencije za optimizaciju poslovanja i inovacije.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                Naša priča
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kako je nastao mybraindev</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Osnovani smo s jasnom vizijom: pomoći tvrtkama da iskoriste revolucionarni potencijal umjetne inteligencije u svakodnevnom poslovanju. 
                S godinama iskustva u području AI tehnologija i optimizacije poslovnih procesa, prepoznali smo potrebu za specijaliziranim pristupom.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Naša misija je demistificirati umjetnu inteligenciju i učiniti je dostupnom i korisnom za sve vrste poslovanja. 
                Kroz personalizirani pristup svakom klijentu, razvijamo i implementiramo AI rješenja koja značajno unapređuju 
                efikasnost, smanjuju troškove i stvaraju konkurentsku prednost.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">Stručnost u AI</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">Inovativna rješenja</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">Poslovni rezultati</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">Kontinuirana podrška</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/af725b81-ba48-43ef-9892-0edcbcbfc36c.png" 
                  alt="Our team working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-6 max-w-xs shadow-md">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">Certificirani stručnjaci</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Naš tim posjeduje vrhunske certifikate u području AI tehnologija i poslovnih procesa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Naša ekspertiza
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specijalizirani za AI i poslovne procese</h2>
            <p className="text-muted-foreground text-lg">
              Naša stručnost u području umjetne inteligencije i poslovnih procesa omogućuje nam 
              da razvijemo rješenja koja stvarno funkcioniraju u praksi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Brain className="h-6 w-6" />,
                title: "Umjetna inteligencija",
                items: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Prediktivna analitika", "Generativni AI"]
              },
              {
                icon: <Briefcase className="h-6 w-6" />,
                title: "Poslovni procesi",
                items: ["Optimizacija workflow-a", "Automatizacija procesa", "Digitalna transformacija", "Smanjenje operativnih troškova", "Povećanje produktivnosti"]
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Industrije",
                items: ["Financije i bankarstvo", "Maloprodaja", "Zdravstvo", "Proizvodnja", "Logistika i distribucija"]
              }
            ].map((category, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-card">
                <div className="mb-4 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Naš tim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upoznajte naše stručnjake</h2>
            <p className="text-muted-foreground text-lg">
              Tim iskusnih profesionalaca specijaliziranih za AI tehnologije i poslovne procese.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="glass-card rounded-xl overflow-hidden hover-card">
              <div className="aspect-[3/2]">
                <img 
                  src="/lovable-uploads/c145af11-63bb-4c28-9fb5-a629c2e464ff.png" 
                  alt="Ivica Baćak" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ivica Baćak</h3>
                <p className="text-primary font-medium text-sm mb-3">Osnivač i CEO</p>
                <p className="text-muted-foreground">Stručnjak za AI rješenja s više od 30 godina iskustva u implementaciji IT rješenja za poslovne procese.</p>
              </div>
            </div>
            
            <div className="glass-card rounded-xl overflow-hidden hover-card">
              <div className="aspect-[3/2]">
                <img 
                  src="/lovable-uploads/f9857324-d9c0-480a-9cbf-b7b7ed3cf54c.png" 
                  alt="Implementirani projekti - kod" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Implementirani projekti</h3>
                <p className="text-primary font-medium text-sm mb-3">Uspješno realizirana rješenja</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• System Health Monitoring</li>
                  <li>• N8N Automation Platform</li>
                  <li>• Docker Management System</li>
                  <li>• API Gateway Solutions</li>
                  <li>• VPS Infrastructure Management</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden hover-card">
              <div className="aspect-[3/2]">
                <img 
                  src="/lovable-uploads/af725b81-ba48-43ef-9892-0edcbcbfc36c.png" 
                  alt="Globalna mreža partnera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Globalna mreža partnera</h3>
                <p className="text-primary font-medium text-sm mb-3">Međunarodna suradnja</p>
                <p className="text-muted-foreground">
                  Tvrtka mybraindev surađuje s globalnom mrežom vrhunskih IT stručnjaka i AI eksperata. 
                  Naši partneri aktivno sudjeluju u projektima diljem svijeta, donoseći bogato međunarodno 
                  iskustvo, najnovija tehnološka rješenja i dubinsko znanje iz područja informacijskih 
                  tehnologija i umjetne inteligencije.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Naše vrijednosti
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Što nas pokreće</h2>
            <p className="text-muted-foreground text-lg">
              Naše temeljne vrijednosti oblikuju sve što radimo i kako pristupamo svakom projektu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Brain className="h-6 w-6" />,
                title: "Inovacija",
                description: "Konstantno istražujemo najnovije AI tehnologije i njihove primjene u poslovnim procesima."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Suradnja",
                description: "Blisko surađujemo s klijentima kako bismo razvili rješenja koja stvarno odgovaraju njihovim potrebama."
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "Kvaliteta",
                description: "Posvećeni smo izvrsnosti u svakom aspektu našeg rada, od početne analize do implementacije."
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Integritet",
                description: "Naš rad temelji se na povjerenju, transparentnosti i etičkom pristupu implementaciji AI tehnologija."
              }
            ].map((value, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover-card">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="relative p-8 md:p-12 text-center md:text-left">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent -z-10"></div>
              
              <div className="md:max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Spremni ste transformirati svoje poslovanje?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Kontaktirajte nas danas i otkrijte kako naša AI rješenja mogu unaprijediti vaše poslovne procese.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus-ring"
                  >
                    Zatražite konzultaciju
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center justify-center h-12 px-8 border border-input bg-background hover:bg-muted rounded-md transition-colors focus-ring"
                  >
                    Istražite naše usluge
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
