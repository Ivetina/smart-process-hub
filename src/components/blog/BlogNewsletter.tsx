
import React from 'react';

const BlogNewsletter = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Pretplatite se na naš newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Primajte najnovije članke, najave i ekskluzivne sadržaje direktno u svoj inbox.
              </p>
              <form 
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle form submission (in a real application)
                }}
              >
                <input
                  type="email"
                  placeholder="Vaša email adresa"
                  className="flex-grow px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus-ring"
                >
                  Pretplatite se
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                Pretplatom prihvaćate našu politiku privatnosti. Možete se odjaviti u bilo kojem trenutku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
