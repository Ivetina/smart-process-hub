import { useState, useEffect, useMemo } from 'react';
import { BlogPost } from '@/types/BlogTypes';
import { useToast } from "@/components/ui/use-toast";
import * as blogApi from '@/api/blogApi';

// Demo blog posts data - u pravoj aplikaciji, ovi bi podaci došli s backenda
const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Kako AI transformira poslovne procese u 2023. godini",
    excerpt: "Implementacija umjetne inteligencije u poslovne procese donosi revolucionarne promjene i prednosti.",
    content: "Duži sadržaj članka bi bio ovdje...",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    date: "15.06.2023.",
    published: true,
    views: 1240,
    clicks: 85,
    categories: ["AI Trendovi", "Poslovni procesi"],
    slug: "ai-transformacija-poslovnih-procesa-2023"
  },
  {
    id: 2,
    title: "5 ključnih prednosti implementacije chatbotova u korisničku podršku",
    excerpt: "Chatbotovi postaju neizostavni dio moderne korisničke podrške.",
    content: "Duži sadržaj članka bi bio ovdje...",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    date: "27.07.2023.",
    published: true,
    views: 980,
    clicks: 67,
    categories: ["Korisnička podrška", "Chatbotovi"],
    slug: "prednosti-implementacije-chatbotova"
  },
  {
    id: 3,
    title: "Machine Learning u financijskom sektoru: Primjene i izazovi",
    excerpt: "Machine learning transformira financijski sektor kroz prediktivnu analitiku.",
    content: "Duži sadržaj članka bi bio ovdje...",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    date: "09.08.2023.",
    published: true,
    views: 756,
    clicks: 45,
    categories: ["Machine Learning", "Financije"],
    slug: "machine-learning-financijski-sektor"
  },
  {
    id: 4,
    title: "Automatizacija poslovnih procesa u proizvodnji korištenjem AI",
    excerpt: "Kako umjetna inteligencija revolucionizira proizvodne procese.",
    content: "Duži sadržaj članka bi bio ovdje...",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
    date: "18.09.2023.",
    published: false,
    views: 0,
    clicks: 0,
    categories: ["Automatizacija", "Proizvodnja"],
    slug: "automatizacija-proizvodnih-procesa-ai"
  }
];

export const useAdminBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const savedPosts = localStorage.getItem('admin-blog-posts');
    return savedPosts ? JSON.parse(savedPosts) : initialBlogPosts;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{key: keyof BlogPost, direction: 'asc' | 'desc'} | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [publishedFilter, setPublishedFilter] = useState<'all' | 'published' | 'drafts'>('all');
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('admin-blog-posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  const availableCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    blogPosts.forEach(post => {
      post.categories.forEach(category => {
        categoriesSet.add(category);
      });
    });
    return Array.from(categoriesSet).sort();
  }, [blogPosts]);

  const handleSortClick = (key: keyof BlogPost) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key) {
      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    }
    
    setSortConfig({ key, direction });
  };

  const sortedBlogPosts = useMemo(() => {
    return [...blogPosts]
      .filter(post => {
        const matchesSearch = 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.categories.some(category => 
            category.toLowerCase().includes(searchQuery.toLowerCase())
          );
        
        const matchesCategories = selectedCategories.length === 0 || 
          post.categories.some(category => selectedCategories.includes(category));
        
        const matchesStatus = 
          publishedFilter === 'all' || 
          (publishedFilter === 'published' && post.published) || 
          (publishedFilter === 'drafts' && !post.published);
        
        return matchesSearch && matchesCategories && matchesStatus;
      })
      .sort((a, b) => {
        if (!sortConfig) return 0;
        
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
  }, [blogPosts, searchQuery, sortConfig, selectedCategories, publishedFilter]);

  const handleDeletePost = (id: number) => {
    if (confirm('Jeste li sigurni da želite izbrisati ovaj članak?')) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
      toast({
        title: "Članak izbrisan",
        description: "Članak je uspješno izbrisan",
      });
    }
  };

  const handleUpdatePost = (updatedPost: BlogPost) => {
    setBlogPosts(blogPosts.map(post => 
      post.id === updatedPost.id 
        ? {...post, ...updatedPost} 
        : post
    ));
    toast({
      title: "Članak ažuriran",
      description: "Članak je uspješno ažuriran",
    });
  };

  const handleAddPost = (newPost: Partial<BlogPost>) => {
    const post: BlogPost = {
      id: Math.max(0, ...blogPosts.map(p => p.id)) + 1,
      title: newPost.title || '',
      excerpt: newPost.excerpt || '',
      content: newPost.content || '',
      image: newPost.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      date: new Date().toLocaleDateString('hr-HR'),
      published: newPost.published || false,
      views: 0,
      clicks: 0,
      categories: newPost.categories || [],
      slug: newPost.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '') || ''
    };
    
    setBlogPosts([...blogPosts, post]);
    toast({
      title: "Članak dodan",
      description: "Novi članak je uspješno dodan",
    });
    
    return post;
  };

  const togglePublishStatus = (id: number) => {
    setBlogPosts(blogPosts.map(post => 
      post.id === id 
        ? {...post, published: !post.published} 
        : post
    ));
    
    toast({
      title: "Status objave promijenjen",
      description: "Status objave je uspješno promijenjen",
    });
  };

  // Funkcija za zakazivanje objave članka
  const scheduleBlogPost = (id: number, publishDate: string): boolean => {
    const post = blogPosts.find(post => post.id === id);
    if (!post) return false;
    
    const updatedPost = {
      ...post,
      scheduledPublishDate: publishDate,
      published: false // Postavljamo na false dok se ne objavi
    };
    
    setBlogPosts(blogPosts.map(p => 
      p.id === id ? updatedPost : p
    ));
    
    return true;
  };

  return {
    blogPosts,
    sortedBlogPosts,
    searchQuery,
    setSearchQuery,
    sortConfig,
    handleSortClick,
    handleDeletePost,
    handleUpdatePost,
    handleAddPost,
    togglePublishStatus,
    selectedCategories,
    setSelectedCategories,
    publishedFilter,
    setPublishedFilter,
    availableCategories,
    scheduleBlogPost
  };
};

// Correct export of API_KEY from blogApi
export const { API_KEY } = blogApi;
