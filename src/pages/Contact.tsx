
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
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
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Povežimo se i razgovarajmo o vašim <span className="text-gradient">AI potrebama</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Kontaktirajte nas za konzultacije o implementaciji AI rješenja u vaše poslovne procese.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information + Form Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Naši kontakt podaci</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Adresa</h3>
                    <p className="text-muted-foreground">
                      Ulica grada Vukovara 269D<br />
                      10000 Zagreb, Hrvatska
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@mybraindev.com" className="hover:text-primary animated-underline">
                        info@mybraindev.com
                      </a><br />
                      <a href="mailto:support@mybraindev.com" className="hover:text-primary animated-underline">
                        support@mybraindev.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+38512345678" className="hover:text-primary animated-underline">
                        +385 1 234 5678
                      </a><br />
                      <a href="tel:+385912345678" className="hover:text-primary animated-underline">
                        +385 91 234 5678
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Radno vrijeme</h3>
                    <p className="text-muted-foreground">
                      Ponedjeljak - Petak: 9:00 - 17:00<br />
                      Subota - Nedjelja: Zatvoreno
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Zašto nas kontaktirati?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        Besplatna inicijalna konzultacija za procjenu vaših potreba
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        Stručni tim s višegodišnjim iskustvom u AI i poslovnim procesima
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        Brz odgovor na vaš upit, obično unutar 24 sata
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        Personalizirani pristup prilagođen vašim specifičnim potrebama
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64 border border-input">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7974915667935!2d15.990942376959712!3d45.80045837108353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68b441ce2ff%3A0x54e2a03adf42446e!2sUlica%20grada%20Vukovara%20269D%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1689089876452!5m2!1sen!2shr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pošaljite upit</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium mb-3 inline-block">
              Česta pitanja
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pitanja o kontaktu</h2>
            <p className="text-muted-foreground text-lg">
              Brzi odgovori na najčešća pitanja o kontaktiranju i suradnji s nama.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Koliko brzo ćete odgovoriti na moj upit?",
                  answer: "Nastojimo odgovoriti na sve upite unutar 24 sata tijekom radnih dana. Za hitne upite, molimo kontaktirajte nas telefonom."
                },
                {
                  question: "Mogu li dobiti besplatnu konzultaciju?",
                  answer: "Da, nudimo besplatnu inicijalnu konzultaciju kako bismo bolje razumjeli vaše potrebe i utvrdili kako vam možemo pomoći."
                },
                {
                  question: "Radite li s klijentima izvan Hrvatske?",
                  answer: "Da, radimo s klijentima iz cijele Europe i šire. Možemo organizirati online sastanke i konzultacije za klijente koji nisu u mogućnosti doći u naš ured."
                },
                {
                  question: "Koja vrsta informacija je potrebna za početnu procjenu?",
                  answer: "Za početnu procjenu korisno je znati više o vašem poslovanju, trenutnim procesima, izazovima s kojima se suočavate i ciljevima koje želite postići implementacijom AI rješenja."
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
    </Layout>
  );
};

export default Contact;
