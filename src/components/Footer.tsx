
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - Logo and info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <span className="text-primary">my</span>
              <span className="text-gradient">brain</span>
              <span className="text-primary">dev</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Specijalizirani za AI integraciju u poslovne procese, pomažemo tvrtkama da iskoriste puni potencijal umjetne inteligencije.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Brzi linkovi
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Početna', path: '/' },
                { name: 'Usluge', path: '/services' },
                { name: 'O nama', path: '/about' },
                { name: 'Shop', path: '/shop' },
                { name: 'Blog', path: '/blog' },
                { name: 'Kontakt', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground animated-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Usluge */}
          <div>
            <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Usluge
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Razvoj AI poslovnih procesa', path: '/services#ai-business-processes' },
                { name: 'Integracija AI servisa', path: '/services#ai-integration' },
                { name: 'AI strategije za poslovanje', path: '/services#ai-strategy' },
                { name: 'Pretplate na poslovne procese', path: '/shop#subscriptions' },
                { name: 'Paketi konzultacija', path: '/shop#consultation-packages' },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground animated-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Ulica grada Vukovara 269D, 10000 Zagreb, Hrvatska
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-muted-foreground mr-2" />
                <a 
                  href="tel:+38512345678" 
                  className="text-sm text-muted-foreground hover:text-foreground animated-underline"
                >
                  +385 1 234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground mr-2" />
                <a 
                  href="mailto:info@mybraindev.com" 
                  className="text-sm text-muted-foreground hover:text-foreground animated-underline"
                >
                  info@mybraindev.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} mybraindev.com. Sva prava pridržana.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground animated-underline"
              >
                Privatnost
              </Link>
              <Link 
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground animated-underline"
              >
                Uvjeti korištenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
