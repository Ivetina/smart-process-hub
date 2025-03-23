
import { BlogPost } from "@/types/BlogTypes";

// API ključ za autorizaciju
export const API_KEY = "admin-api-key-2024";

// Pomoćna funkcija za provjeru API ključa
export const validateApiKey = (key: string): boolean => {
  return key === API_KEY;
};

// Funkcija za dohvat svih članaka
export const fetchBlogPosts = (apiKey: string): BlogPost[] | null => {
  if (!validateApiKey(apiKey)) {
    return null;
  }
  
  const savedPosts = localStorage.getItem('admin-blog-posts');
  if (!savedPosts) {
    return [];
  }
  
  return JSON.parse(savedPosts);
};

// Funkcija za dohvat jednog članka prema ID
export const fetchBlogPost = (apiKey: string, id: number): BlogPost | null => {
  if (!validateApiKey(apiKey)) {
    return null;
  }
  
  const posts = fetchBlogPosts(apiKey);
  if (!posts) {
    return null;
  }
  
  return posts.find(post => post.id === id) || null;
};

// Funkcija za dodavanje novog članka
export const addBlogPost = (apiKey: string, post: Partial<BlogPost>): BlogPost | null => {
  if (!validateApiKey(apiKey)) {
    return null;
  }
  
  const posts = fetchBlogPosts(apiKey) || [];
  
  // Kreiranje novog članka
  const newPost: BlogPost = {
    id: Math.max(0, ...posts.map(p => p.id)) + 1,
    title: post.title || '',
    excerpt: post.excerpt || '',
    content: post.content || '',
    image: post.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    date: new Date().toLocaleDateString('hr-HR'),
    published: post.published || false,
    views: 0,
    clicks: 0,
    categories: post.categories || [],
    slug: post.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '') || ''
  };
  
  // Spremanje u localStorage
  localStorage.setItem('admin-blog-posts', JSON.stringify([...posts, newPost]));
  
  return newPost;
};

// Funkcija za ažuriranje postojećeg članka
export const updateBlogPost = (apiKey: string, post: BlogPost): BlogPost | null => {
  if (!validateApiKey(apiKey)) {
    return null;
  }
  
  const posts = fetchBlogPosts(apiKey);
  if (!posts) {
    return null;
  }
  
  const updatedPosts = posts.map(p => p.id === post.id ? {...p, ...post} : p);
  localStorage.setItem('admin-blog-posts', JSON.stringify(updatedPosts));
  
  return post;
};

// Funkcija za brisanje članka
export const deleteBlogPost = (apiKey: string, id: number): boolean => {
  if (!validateApiKey(apiKey)) {
    return false;
  }
  
  const posts = fetchBlogPosts(apiKey);
  if (!posts) {
    return false;
  }
  
  const filteredPosts = posts.filter(post => post.id !== id);
  localStorage.setItem('admin-blog-posts', JSON.stringify(filteredPosts));
  
  return true;
};

// Funkcija za zakazivanje objave za određeni datum
export const scheduleBlogPost = (apiKey: string, id: number, publishDate: string): boolean => {
  if (!validateApiKey(apiKey)) {
    return false;
  }
  
  const posts = fetchBlogPosts(apiKey);
  if (!posts) {
    return false;
  }
  
  const post = posts.find(p => p.id === id);
  if (!post) {
    return false;
  }
  
  // Dodajemo informaciju o zakazanoj objavi
  const updatedPost = {
    ...post,
    scheduledPublishDate: publishDate,
    published: false // Postavljamo na false dok se ne objavi
  };
  
  return updateBlogPost(apiKey, updatedPost as BlogPost) !== null;
};

// Funkcija za provjeru i objavu zakazanih članaka
export const publishScheduledPosts = (apiKey: string): BlogPost[] => {
  if (!validateApiKey(apiKey)) {
    return [];
  }
  
  const posts = fetchBlogPosts(apiKey);
  if (!posts) {
    return [];
  }
  
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const publishedPosts: BlogPost[] = [];
  
  const updatedPosts = posts.map(post => {
    // Ako članak ima zakazani datum objave i taj datum je danas ili ranije
    if (post.scheduledPublishDate && post.scheduledPublishDate <= today && !post.published) {
      const updatedPost = {
        ...post,
        published: true,
        date: new Date().toLocaleDateString('hr-HR'),
        scheduledPublishDate: undefined // Uklanjamo zakazani datum objave
      };
      publishedPosts.push(updatedPost);
      return updatedPost;
    }
    return post;
  });
  
  localStorage.setItem('admin-blog-posts', JSON.stringify(updatedPosts));
  
  return publishedPosts;
};
