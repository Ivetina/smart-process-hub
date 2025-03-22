
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, Plus, Search, Eye, ArrowUpDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock blog post type
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  published: boolean;
  views: number;
  clicks: number;
  categories: string[];
}

const AdminBlogPosts = () => {
  // Demo blog posts data - u pravoj aplikaciji, ovi bi podaci došli s backenda
  const initialBlogPosts = [
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
      categories: ["AI Trendovi", "Poslovni procesi"]
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
      categories: ["Korisnička podrška", "Chatbotovi"]
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
      categories: ["Machine Learning", "Financije"]
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
      categories: ["Automatizacija", "Proizvodnja"]
    }
  ];

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const savedPosts = localStorage.getItem('admin-blog-posts');
    return savedPosts ? JSON.parse(savedPosts) : initialBlogPosts;
  });
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    categories: [],
    published: false
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [categoryInput, setCategoryInput] = useState('');
  const { toast } = useToast();
  const [sortConfig, setSortConfig] = useState<{key: keyof BlogPost, direction: 'asc' | 'desc'} | null>(null);

  useEffect(() => {
    localStorage.setItem('admin-blog-posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  const handleSortClick = (key: keyof BlogPost) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key) {
      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    }
    
    setSortConfig({ key, direction });
  };

  const sortedBlogPosts = [...blogPosts]
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categories.some(category => 
        category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
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

  const handleAddNewClick = () => {
    setCurrentPost({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      categories: [],
      published: false
    });
    setIsEditing(false);
    setIsDialogOpen(true);
  };

  const handleEditClick = (post: BlogPost) => {
    setCurrentPost({...post});
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (id: number) => {
    if (confirm('Jeste li sigurni da želite izbrisati ovaj članak?')) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
      toast({
        title: "Članak izbrisan",
        description: "Članak je uspješno izbrisan",
      });
    }
  };

  const handleDialogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentPost.title || !currentPost.excerpt) {
      toast({
        title: "Greška",
        description: "Naslov i sažetak su obavezni",
        variant: "destructive"
      });
      return;
    }
    
    if (isEditing) {
      setBlogPosts(blogPosts.map(post => 
        post.id === currentPost.id 
          ? {...post, ...currentPost} 
          : post
      ));
      toast({
        title: "Članak ažuriran",
        description: "Članak je uspješno ažuriran",
      });
    } else {
      const newPost: BlogPost = {
        id: Math.max(0, ...blogPosts.map(p => p.id)) + 1,
        title: currentPost.title || '',
        excerpt: currentPost.excerpt || '',
        content: currentPost.content || '',
        image: currentPost.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        date: new Date().toLocaleDateString('hr-HR'),
        published: currentPost.published || false,
        views: 0,
        clicks: 0,
        categories: currentPost.categories || []
      };
      
      setBlogPosts([...blogPosts, newPost]);
      toast({
        title: "Članak dodan",
        description: "Novi članak je uspješno dodan",
      });
    }
    
    setIsDialogOpen(false);
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryInput.trim()) return;
    
    if (!currentPost.categories) {
      setCurrentPost({...currentPost, categories: [categoryInput]});
    } else if (!currentPost.categories.includes(categoryInput)) {
      setCurrentPost({
        ...currentPost, 
        categories: [...currentPost.categories, categoryInput]
      });
    }
    
    setCategoryInput('');
  };

  const handleRemoveCategory = (category: string) => {
    if (!currentPost.categories) return;
    
    setCurrentPost({
      ...currentPost,
      categories: currentPost.categories.filter(c => c !== category)
    });
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Blog članci</CardTitle>
            <CardDescription>
              Upravljajte blog člancima, dodajte nove ili uredite postojeće.
            </CardDescription>
          </div>
          <Button onClick={handleAddNewClick}>
            <Plus className="mr-2 h-4 w-4" /> Novi članak
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Pretraži članke..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead onClick={() => handleSortClick('title')} className="cursor-pointer">
                    Naslov 
                    <ArrowUpDown className="ml-1 h-4 w-4 inline" />
                  </TableHead>
                  <TableHead>Kategorije</TableHead>
                  <TableHead onClick={() => handleSortClick('date')} className="cursor-pointer">
                    Datum 
                    <ArrowUpDown className="ml-1 h-4 w-4 inline" />
                  </TableHead>
                  <TableHead onClick={() => handleSortClick('views')} className="cursor-pointer text-right">
                    Pregledi 
                    <ArrowUpDown className="ml-1 h-4 w-4 inline" />
                  </TableHead>
                  <TableHead onClick={() => handleSortClick('published')} className="cursor-pointer">
                    Status 
                    <ArrowUpDown className="ml-1 h-4 w-4 inline" />
                  </TableHead>
                  <TableHead>Akcije</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedBlogPosts.length > 0 ? (
                  sortedBlogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {post.categories.map((category, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              {category}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{post.date}</TableCell>
                      <TableCell className="text-right">{post.views}</TableCell>
                      <TableCell>
                        <span 
                          className={`px-2 py-1 text-xs rounded-full ${
                            post.published 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                          onClick={() => togglePublishStatus(post.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          {post.published ? 'Objavljeno' : 'Nacrt'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="icon" variant="ghost" onClick={() => handleEditClick(post)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost" onClick={() => handleDeleteClick(post.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      Nema pronađenih članaka.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Dialog za dodavanje/uređivanje posta */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{isEditing ? 'Uredi članak' : 'Novi članak'}</DialogTitle>
            <DialogDescription>
              {isEditing 
                ? 'Uredite detalje postojećeg članka.' 
                : 'Dodajte novi članak popunjavanjem sljedećih podataka.'}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleDialogSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Naslov</Label>
              <Input 
                id="title" 
                value={currentPost.title || ''} 
                onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
                placeholder="Unesite naslov članka"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Sažetak</Label>
              <Textarea 
                id="excerpt" 
                value={currentPost.excerpt || ''} 
                onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
                placeholder="Unesite kratki sažetak članka"
                rows={3}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Sadržaj</Label>
              <Textarea 
                id="content" 
                value={currentPost.content || ''} 
                onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                placeholder="Unesite sadržaj članka"
                rows={6}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">URL slike</Label>
              <Input 
                id="image" 
                value={currentPost.image || ''} 
                onChange={(e) => setCurrentPost({...currentPost, image: e.target.value})}
                placeholder="Unesite URL slike članka"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Kategorije</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {currentPost.categories?.map((category, index) => (
                  <div key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                    {category}
                    <button 
                      type="button"
                      onClick={() => handleRemoveCategory(category)}
                      className="ml-1 text-blue-800 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex">
                <Input 
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  placeholder="Dodaj kategoriju..."
                  className="mr-2"
                />
                <Button 
                  type="button"
                  onClick={handleAddCategory}
                  variant="outline"
                >
                  Dodaj
                </Button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="published" 
                checked={currentPost.published || false}
                onCheckedChange={(checked) => 
                  setCurrentPost({...currentPost, published: checked as boolean})
                }
              />
              <Label htmlFor="published">Objavljeno</Label>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Odustani
              </Button>
              <Button type="submit">
                {isEditing ? 'Spremi promjene' : 'Dodaj članak'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBlogPosts;
