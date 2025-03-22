
import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/BlogTypes';

// Default posts to use if no admin posts are found in localStorage
const defaultBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Kako AI transformira poslovne procese u 2023. godini",
    excerpt: "Implementacija umjetne inteligencije u poslovne procese donosi revolucionarne promjene i prednosti. Otkrijte kako vodeće kompanije koriste AI za optimizaciju poslovanja.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    date: "15.06.2023.",
    slug: "ai-transformacija-poslovnih-procesa-2023",
    categories: ["AI Trendovi", "Poslovni procesi"],
    published: true,
    views: 0,
    clicks: 0
  },
  {
    id: 2,
    title: "5 ključnih prednosti implementacije chatbotova u korisničku podršku",
    excerpt: "Chatbotovi postaju neizostavni dio moderne korisničke podrške. Saznajte koje su glavne prednosti njihove implementacije i kako mogu unaprijediti iskustvo vaših korisnika.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    date: "27.07.2023.",
    slug: "prednosti-implementacije-chatbotova",
    categories: ["Korisnička podrška", "Chatbotovi"],
    published: true,
    views: 0,
    clicks: 0
  },
  {
    id: 3,
    title: "Machine Learning u financijskom sektoru: Primjene i izazovi",
    excerpt: "Machine learning transformira financijski sektor kroz prediktivnu analitiku, detekciju prijevara i automatizaciju procesa. Istražite primjene i izazove implementacije.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    date: "09.08.2023.",
    slug: "machine-learning-financijski-sektor",
    categories: ["Machine Learning", "Financije"],
    published: true,
    views: 0,
    clicks: 0
  }
];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Try to load posts from localStorage
    const savedPosts = localStorage.getItem('admin-blog-posts');
    let blogPosts: BlogPost[] = [];
    
    if (savedPosts) {
      // Parse posts from localStorage
      const adminPosts: BlogPost[] = JSON.parse(savedPosts);
      
      // Filter to show only published posts on the public blog
      blogPosts = adminPosts.filter(post => post.published);
    } else {
      // If no posts in localStorage, use default posts
      blogPosts = defaultBlogPosts;
    }
    
    setPosts(blogPosts);
  }, []);
  
  // Function to update views when a post is viewed
  const updatePostViews = (postId: number) => {
    const savedPosts = localStorage.getItem('admin-blog-posts');
    
    if (savedPosts) {
      const adminPosts: BlogPost[] = JSON.parse(savedPosts);
      const updatedPosts = adminPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            views: (post.views || 0) + 1
          };
        }
        return post;
      });
      
      localStorage.setItem('admin-blog-posts', JSON.stringify(updatedPosts));
    }
  };
  
  // Function to update clicks when a post is clicked
  const updatePostClicks = (postId: number) => {
    const savedPosts = localStorage.getItem('admin-blog-posts');
    
    if (savedPosts) {
      const adminPosts: BlogPost[] = JSON.parse(savedPosts);
      const updatedPosts = adminPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            clicks: (post.clicks || 0) + 1
          };
        }
        return post;
      });
      
      localStorage.setItem('admin-blog-posts', JSON.stringify(updatedPosts));
    }
  };
  
  return {
    posts,
    updatePostViews,
    updatePostClicks
  };
};
