
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Mail, Video, MessageSquare, Phone } from 'lucide-react';

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
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:myoffice@mybraindev.com" className="hover:text-primary animated-underline">
                        myoffice@mybraindev.com
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
                      <a href="tel:+385992082866" className="hover:text-primary animated-underline">
                        +385 99 208 28 66
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Video className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Teams</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:myoffice@mybraindev.com" className="hover:text-primary animated-underline">
                        myoffice@mybraindev.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">
                      <a href="https://wa.me/385992082866" className="hover:text-primary animated-underline">
                        +385 99 208 28 66
                      </a>
                    </p>
                  </div>
                </div>
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
