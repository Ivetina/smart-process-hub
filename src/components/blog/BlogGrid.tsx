
import React from 'react';
import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/types/BlogTypes';

interface BlogGridProps {
  filteredPosts: BlogPost[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setActiveCategory: (category: string | null) => void;
}

const BlogGrid = ({ 
  filteredPosts,
  searchQuery,
  setSearchQuery,
  setActiveCategory
}: BlogGridProps) => {
  return (
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
                slug={post.slug || `post-${post.id}`}
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
  );
};

export default BlogGrid;
