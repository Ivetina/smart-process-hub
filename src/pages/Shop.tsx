
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ShopItem from '@/components/ShopItem';
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('subscriptions');
  
  const handlePurchase = (itemName: string) => {
    toast({
      title: "Dodano u košaricu!",
      description: `${itemName} je dodan u vašu košaricu.`,
    });
  };
  
  // Subscription packages data
  const subscriptions = [
    {
      title: "Osnovni",
      price: "199€",
      period: "/mjesečno",
      description: "Idealno za manje tvrtke koje žele početi s AI automatizacijom poslovnih procesa.",
      features: [
        { text: "2 AI poslovna procesa", included: true },
        { text: "5 korisnika", included: true },
        { text: "Mjesečno 5 sati konzultacija", included: true },
        { text: "Email podrška", included: true },
        { text: "Telefon podrška", included: false },
        { text: "Prilagođeni izvještaji", included: false },
        { text: "Napredna analitika", included: false },
      ],
      popular: false
    },
    {
      title: "Profesionalni",
      price: "499€",
      period: "/mjesečno",
      description: "Za rastuće tvrtke koje trebaju sveobuhvatna AI rješenja za poslovne procese.",
      features: [
        { text: "5 AI poslovnih procesa", included: true },
        { text: "20 korisnika", included: true },
        { text: "Mjesečno 10 sati konzultacija", included: true },
        { text: "Email podrška", included: true },
        { text: "Telefon podrška", included: true },
        { text: "Prilagođeni izvještaji", included: true },
        { text: "Napredna analitika", included: false },
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "999€",
      period: "/mjesečno",
      description: "Za veće organizacije koje trebaju napredna AI rješenja i punu podršku.",
      features: [
        { text: "Neograničeni AI poslovni procesi", included: true },
        { text: "Neograničen broj korisnika", included: true },
        { text: "Mjesečno 20 sati konzultacija", included: true },
        { text: "Email podrška", included: true },
        { text: "Telefon podrška", included: true },
        { text: "Prilagođeni izvještaji", included: true },
        { text: "Napredna analitika", included: true },
      ],
      popular: false
    }
  ];
  
  // Consultation packages data
  const consultations = [
    {
      title: "Dijagnostika",
      price: "499€",
      period: "jednokratno",
      description: "Detaljna analiza vaših poslovnih procesa i identificiranje prilika za AI implementaciju.",
      features: [
        { text: "5 sati konzultacija", included: true },
        { text: "Analiza postojećih procesa", included: true },
        { text: "Identifikacija AI prilika", included: true },
        { text: "Izvještaj s preporukama", included: true },
        { text: "Plan implementacije", included: false },
        { text: "Implementacija rješenja", included: false },
      ],
      popular: false
    },
    {
      title: "Strateško planiranje",
      price: "999€",
      period: "jednokratno",
      description: "Razvoj sveobuhvatne strategije za implementaciju AI rješenja u vaše poslovanje.",
      features: [
        { text: "10 sati konzultacija", included: true },
        { text: "Analiza postojećih procesa", included: true },
        { text: "Identifikacija AI prilika", included: true },
        { text: "Izvještaj s preporukama", included: true },
        { text: "Plan implementacije", included: true },
        { text: "Implementacija rješenja", included: false },
      ],
      popular: true
    },
    {
      title: "Potpuna implementacija",
      price: "2499€",
      period: "jednokratno",
      description: "Kompletno rješenje - od analize do implementacije AI rješenja u vaše poslovanje.",
      features: [
        { text: "20 sati konzultacija", included: true },
        { text: "Analiza postojećih procesa", included: true },
        { text: "Identifikacija AI prilika", included: true },
        { text: "Izvještaj s preporukama", included: true },
        { text: "Plan implementacije", included: true },
        { text: "Implementacija rješenja", included: true },
      ],
      popular: false
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
              E-shop
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Odaberite <span className="text-gradient">AI rješenja</span> za vaše potrebe
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Nudimo različite pakete pretplate na gotove poslovne procese i konzultacije prilagođene vašim potrebama.
            </p>
          </div>
        </div>
      </section>
      
      {/* Shop Tabs */}
      <section id="subscriptions" className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-lg bg-muted">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'subscriptions' ? 'bg-background shadow' : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('subscriptions')}
              >
                Pretplate na poslovne procese
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'consultations' ? 'bg-background shadow' : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('consultations')}
              >
                Paketi konzultacija
              </button>
            </div>
          </div>
          
          {/* Tab Content - Subscriptions */}
          <div className={`${activeTab === 'subscriptions' ? 'block' : 'hidden'}`}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pretplate na gotove poslovne procese</h2>
              <p className="text-muted-foreground text-lg">
                Odaberite paket pretplate koji najbolje odgovara potrebama vašeg poslovanja za pristup našim gotovim AI poslovnim procesima.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subscriptions.map((item, index) => (
                <ShopItem
                  key={index}
                  title={item.title}
                  price={item.price}
                  period={item.period}
                  description={item.description}
                  features={item.features}
                  popular={item.popular}
                  btnText="Kupite pretplatu"
                  onClick={() => handlePurchase(item.title)}
                />
              ))}
            </div>
          </div>
          
          {/* Tab Content - Consultations */}
          <div id="consultation-packages" className={`${activeTab === 'consultations' ? 'block' : 'hidden'}`}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Paketi konzultacija</h2>
              <p className="text-muted-foreground text-lg">
                Odaberite paket konzultacija koji najbolje odgovara trenutnoj fazi vašeg poslovanja i specifičnim potrebama.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultations.map((item, index) => (
                <ShopItem
                  key={index}
                  title={item.title}
                  price={item.price}
                  period={item.period}
                  description={item.description}
                  features={item.features}
                  popular={item.popular}
                  btnText="Kupite paket"
                  onClick={() => handlePurchase(item.title)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
                Prilagođena rješenja
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trebate specifično rješenje?</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Ako naši standardni paketi ne odgovaraju vašim specifičnim potrebama, 
                možemo razviti prilagođeno AI rješenje za vaše jedinstvene poslovne procese.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Potpuno prilagođeno vašim potrebama</h3>
                    <p className="text-sm text-muted-foreground">
                      Razvijamo rješenja koja su dizajnirana specifično za vaše poslovne procese i ciljeve.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Fleksibilni modeli plaćanja</h3>
                    <p className="text-sm text-muted-foreground">
                      Nudimo različite opcije financiranja za prilagođena rješenja prema vašim mogućnostima.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Dugoročno partnerstvo</h3>
                    <p className="text-sm text-muted-foreground">
                      Gradimo dugoročne odnose s klijentima kako bismo osigurali kontinuirani uspjeh implementiranih rješenja.
                    </p>
                  </div>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus-ring"
              >
                Zatražite prilagođenu ponudu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-full">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                  alt="Custom AI solutions" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-6 max-w-xs shadow-md">
                <div className="flex items-center text-primary mb-2">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span className="font-medium">Prilagođena rješenja</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Razvijamo rješenja prema vašim specifičnim potrebama i industrijskim zahtjevima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Iskustva klijenata
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Što naši klijenti kažu</h2>
            <p className="text-muted-foreground text-lg">
              Pročitajte iskustva naših klijenata koji su već implementirali naša AI rješenja u svoje poslovanje.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "Implementacijom AI poslovnih procesa povećali smo produktivnost za 35% u samo tri mjeseca. Najbolja investicija koju smo napravili ove godine.",
                author: "Marija Novak",
                position: "Direktor operacija, Financijska grupa d.o.o.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              },
              {
                quote: "mybraindev tim je izvrstan u razumijevanju naših potreba i implementaciji AI rješenja koja stvarno funkcioniraju u praksi. Preporučujem svima.",
                author: "Petar Horvat",
                position: "CEO, Tech Solutions d.o.o.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
              },
              {
                quote: "Konzultacije su nam omogućile da jasno vidimo gdje možemo implementirati AI u našem poslovanju. Sada imamo jasnu strategiju za budućnost.",
                author: "Ivana Matić",
                position: "CTO, Retail Expert d.o.o.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover-card">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Česta pitanja
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Odgovori na česta pitanja</h2>
            <p className="text-muted-foreground text-lg">
              Ovdje možete pronaći odgovore na najčešća pitanja o našim paketima i uslugama.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Što uključuju pretplate na poslovne procese?",
                  answer: "Naše pretplate uključuju pristup gotovim AI poslovnim procesima koje možete odmah implementirati u svoje poslovanje. Ovisno o paketu, dobivate pristup različitom broju procesa, konzultacijama i korisničkoj podršci."
                },
                {
                  question: "Mogu li nadograditi svoj paket kasnije?",
                  answer: "Da, u bilo kojem trenutku možete nadograditi svoj paket na viši tier. Nadogradnja je jednostavna i omogućuje vam pristup dodatnim funkcionalnostima i uslugama."
                },
                {
                  question: "Koliko brzo mogu implementirati AI rješenja?",
                  answer: "Brzina implementacije ovisi o složenosti vašeg poslovanja i odabranom paketu. Gotovi poslovni procesi mogu se implementirati u roku od nekoliko dana, dok prilagođena rješenja mogu zahtijevati duži vremenski period."
                },
                {
                  question: "Trebam li tehničko znanje za korištenje vaših rješenja?",
                  answer: "Ne, naša rješenja su dizajnirana da budu jednostavna za korištenje i ne zahtijevaju tehničko predznanje. Također pružamo sveobuhvatnu obuku i podršku za korištenje implementiranih rješenja."
                },
                {
                  question: "Mogu li dobiti povrat novca ako nisam zadovoljan?",
                  answer: "Da, nudimo garanciju povrata novca u roku od 14 dana za sve naše pakete ako niste zadovoljni. Vjerujemo u kvalitetu naših rješenja i želimo osigurati vaše zadovoljstvo."
                }
              ].map((faq, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent -z-10"></div>
              
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Započnite s AI integracijom danas
                </h2>
                <p className="text-muted-foreground text-lg">
                  Odaberite paket koji odgovara vašim potrebama ili nas kontaktirajte za prilagođeno rješenje.
                </p>
              </div>
              <div className="md:w-1/3 flex flex-col gap-4">
                <Link 
                  to="/shop" 
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors focus-ring"
                >
                  Pregledajte pakete
                  <ShoppingCart className="h-4 w-4" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center h-12 px-8 border border-input bg-background hover:bg-muted rounded-md transition-colors focus-ring"
                >
                  Kontaktirajte nas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
