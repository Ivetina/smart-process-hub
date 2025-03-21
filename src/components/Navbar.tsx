
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Navigation items
  const navItems = [
    { name: 'Početna', path: '/' },
    { name: 'Usluge', path: '/services' },
    { name: 'O nama', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 font-display font-bold text-xl md:text-2xl"
            onClick={closeMenu}
          >
            <span className="text-primary">my</span>
            <span className="text-gradient">brain</span>
            <span className="text-primary">dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors focus-ring",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact button - desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-ring"
            >
              Zatražite konzultaciju
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-md animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors focus-ring",
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Contact button - mobile */}
          <Link
            to="/contact"
            className="block w-full text-center mt-3 px-3 py-3 rounded-md text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 focus-ring"
            onClick={closeMenu}
          >
            Zatražite konzultaciju
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
