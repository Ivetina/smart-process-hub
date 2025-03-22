
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import BlogHero from '@/components/blog/BlogHero';
import BlogSearch from '@/components/blog/BlogSearch';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogNewsletter from '@/components/blog/BlogNewsletter';
import { BlogPost } from '@/types/BlogTypes';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { posts } = useBlogPosts();
  
  // Update post views when the blog page loads
  useEffect(() => {
    // This logic could be enhanced to track specific post views
    // Currently just recording page view in general
    console.log('Blog page viewed');
  }, []);
  
  // Extract unique categories
  const allCategories = Array.from(
    new Set(posts.flatMap(post => post.categories))
  );
  
  // Filter posts based on search query and active category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory ? post.categories.includes(activeCategory) : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      <BlogHero />
      
      <BlogSearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        allCategories={allCategories}
      />
      
      <BlogGrid 
        filteredPosts={filteredPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setActiveCategory={setActiveCategory}
      />
      
      <BlogNewsletter />
    </Layout>
  );
};

export default Blog;
