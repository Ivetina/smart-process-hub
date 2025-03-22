
import React from 'react';
import { Search } from 'lucide-react';

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  allCategories: string[];
}

const BlogSearch = ({ 
  searchQuery, 
  setSearchQuery, 
  activeCategory, 
  setActiveCategory, 
  allCategories 
}: BlogSearchProps) => {
  return (
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
  );
};

export default BlogSearch;
