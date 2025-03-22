
import React from 'react';

const BlogHero = () => {
  return (
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
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Stručni članci o <span className="text-gradient">AI trendovima</span> i primjenama
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            Istražite naše članke o najnovijim trendovima i praktičnim primjenama umjetne inteligencije u poslovnim procesima.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
