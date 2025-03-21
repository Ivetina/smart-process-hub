
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Kako AI transformira poslovne procese u 2023. godini",
      excerpt: "Implementacija umjetne inteligencije u poslovne procese donosi revolucionarne promjene i prednosti. Otkrijte kako vodeće kompanije koriste AI za optimizaciju poslovanja.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      date: "15.06.2023.",
      slug: "ai-transformacija-poslovnih-procesa-2023",
      categories: ["AI Trendovi", "Poslovni procesi"]
    },
    {
      id: 2,
      title: "5 ključnih prednosti implementacije chatbotova u korisničku podršku",
      excerpt: "Chatbotovi postaju neizostavni dio moderne korisničke podrške. Saznajte koje su glavne prednosti njihove implementacije i kako mogu unaprijediti iskustvo vaših korisnika.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      date: "27.07.2023.",
      slug: "prednosti-implementacije-chatbotova",
      categories: ["Korisnička podrška", "Chatbotovi"]
    },
    {
      id: 3,
      title: "Machine Learning u financijskom sektoru: Primjene i izazovi",
      excerpt: "Machine learning transformira financijski sektor kroz prediktivnu analitiku, detekciju prijevara i automatizaciju procesa. Istražite primjene i izazove implementacije.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      date: "09.08.2023.",
      slug: "machine-learning-financijski-sektor",
      categories: ["Machine Learning", "Financije"]
    },
    {
      id: 4,
      title: "Automatizacija poslovnih procesa u proizvodnji korištenjem AI",
      excerpt: "Kako umjetna inteligencija revolucionizira proizvodne procese kroz automatizaciju, prediktivno održavanje i optimizaciju lanca opskrbe.",
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
      date: "18.09.2023.",
      slug: "automatizacija-poslovnih-procesa-proizvodnja",
      categories: ["Automatizacija", "Proizvodnja"]
    },
    {
      id: 5,
      title: "Budućnost rada: Kako AI mijenja tržište rada i potrebne vještine",
      excerpt: "Umjetna inteligencija mijenja prirodu poslova i vještine koje su potrebne za uspjeh. Istražite kako se pripremiti za tržište rada budućnosti.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      date: "05.10.2023.",
      slug: "buducnost-rada-ai-trziste-rada",
      categories: ["AI Trendovi", "Tržište rada"]
    },
    {
      id: 6,
      title: "Etički izazovi implementacije AI u poslovne procese",
      excerpt: "S rastom primjene AI tehnologija u poslovanju, pojavljuju se važna etička pitanja. Saznajte koja su ključna etička razmatranja pri implementaciji AI sustava.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
      date: "22.11.2023.",
      slug: "eticki-izazovi-ai-implementacije",
      categories: ["Etika", "AI Strategija"]
    }
  ];
  
  // Extract unique categories
  const allCategories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  );
  
  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory ? post.categories.includes(activeCategory) : true;
    
    return matchesSearch && matchesCategory;
  });
  
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
      
      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Search Bar */}
            <div className="w-full md:w-auto flex-grow max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  placeholder="Pretražite članke..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="w-full md:w-auto flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                  activeCategory === null
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
                }`}
              >
                Sve kategorije
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map(post => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  slug={post.slug}
                  categories={post.categories}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-2">Nema pronađenih članaka</h3>
              <p className="text-muted-foreground mb-6">
                Pokušajte s drugim ključnim riječima ili odaberite drugu kategoriju.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory(null);
                }}
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus-ring"
              >
                Prikaži sve članke
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
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
    </Layout>
  );
};

export default Blog;
