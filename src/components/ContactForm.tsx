
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'development'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Poruka je poslana!",
        description: "Vaš upit je uspješno zaprimljen. Javit ćemo vam se uskoro.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: 'development'
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Ime i prezime
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Vaše ime i prezime"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email adresa
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="vas@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">
            Tvrtka / Organizacija
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Naziv vaše tvrtke"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1">
            Usluga koja vas zanima
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="development">Razvoj AI poslovnih procesa</option>
            <option value="integration">Integracija AI servisa</option>
            <option value="consulting">AI strategije za poslovanje</option>
            <option value="other">Drugo</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Vaša poruka
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Opišite vaše potrebe i kako vam možemo pomoći..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex justify-center items-center h-10 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Šaljem...
            </>
          ) : (
            'Pošalji upit'
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
