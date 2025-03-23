
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar } from "lucide-react";
import { BlogPost } from "@/types/BlogTypes";
import BlogPostsTable from './BlogPostsTable';
import BlogPostsSearch from './BlogPostsSearch';
import BlogPostDialog from './BlogPostDialog';
import { useAdminBlogPosts } from '@/hooks/useAdminBlogPosts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { publishScheduledPosts, API_KEY } from '@/api/blogApi';

const AdminBlogPosts = () => {
  const {
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
  } = useAdminBlogPosts();
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    categories: [],
    published: false
  });
  const [isEditing, setIsEditing] = useState(false);
  const [apiKey, setApiKey] = useState(API_KEY);
  const [scheduledDate, setScheduledDate] = useState('');
  const { toast } = useToast();

  // Funkcija za automatsko objavljivanje zakazanih članaka
  const checkAndPublishScheduledPosts = () => {
    const publishedPosts = publishScheduledPosts(apiKey);
    
    if (publishedPosts.length > 0) {
      toast({
        title: "Automatska objava",
        description: `Objavljeno ${publishedPosts.length} zakazanih članaka`,
      });
    }
  };

  // Provjera zakazanih članaka pri učitavanju
  useEffect(() => {
    checkAndPublishScheduledPosts();
    
    // Postaviti interval za provjeru svakih 12 sati
    const interval = setInterval(checkAndPublishScheduledPosts, 12 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

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

  const handleDialogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentPost.title || !currentPost.excerpt) {
      return;
    }
    
    if (isEditing) {
      handleUpdatePost(currentPost as BlogPost);
    } else {
      handleAddPost(currentPost);
    }
    
    setIsDialogOpen(false);
  };

  const handleSchedulePost = (post: BlogPost) => {
    if (!scheduledDate) {
      toast({
        title: "Greška",
        description: "Molimo odaberite datum objave",
        variant: "destructive"
      });
      return;
    }
    
    if (scheduleBlogPost(post.id, scheduledDate)) {
      toast({
        title: "Zakazana objava",
        description: `Članak "${post.title}" zakazan za objavu ${scheduledDate}`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="posts">
        <TabsList className="mb-4">
          <TabsTrigger value="posts">Članci</TabsTrigger>
          <TabsTrigger value="scheduled">Zakazane objave</TabsTrigger>
          <TabsTrigger value="api">API pristup</TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts">
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
              <BlogPostsSearch 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                publishedFilter={publishedFilter}
                setPublishedFilter={setPublishedFilter}
                availableCategories={availableCategories}
              />
              
              <BlogPostsTable 
                sortedBlogPosts={sortedBlogPosts}
                sortConfig={sortConfig}
                handleSortClick={handleSortClick}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeletePost}
                togglePublishStatus={togglePublishStatus}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scheduled">
          <Card>
            <CardHeader>
              <CardTitle>Zakazane objave</CardTitle>
              <CardDescription>
                Upravljajte zakazanim objavama i postavite datume objave za članke.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-end gap-4">
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="schedule-date">Datum objave</Label>
                    <Input 
                      id="schedule-date" 
                      type="date" 
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={checkAndPublishScheduledPosts}
                  >
                    Provjeri zakazane objave
                  </Button>
                </div>
                
                <div className="border rounded-md">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Naslov</th>
                        <th className="text-left py-3 px-4">Zakazano za</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-right py-3 px-4">Akcije</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedBlogPosts
                        .filter(post => post.scheduledPublishDate || !post.published)
                        .map(post => (
                          <tr key={post.id} className="border-b">
                            <td className="py-3 px-4">{post.title}</td>
                            <td className="py-3 px-4">
                              {post.scheduledPublishDate || 
                                <span className="text-gray-400">Nije zakazano</span>
                              }
                            </td>
                            <td className="py-3 px-4">
                              {post.scheduledPublishDate ? (
                                <Badge variant="secondary">Zakazano</Badge>
                              ) : post.published ? (
                                <Badge variant="default">Objavljeno</Badge>
                              ) : (
                                <Badge variant="outline">Skica</Badge>
                              )}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleSchedulePost(post)}
                                disabled={!scheduledDate}
                              >
                                <Calendar className="h-4 w-4 mr-2" />
                                Zakaži objavu
                              </Button>
                            </td>
                          </tr>
                        ))}
                      {sortedBlogPosts.filter(post => post.scheduledPublishDate || !post.published).length === 0 && (
                        <tr>
                          <td colSpan={4} className="py-6 text-center text-gray-500">
                            Nema zakazanih objava
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API pristup</CardTitle>
              <CardDescription>
                Koristite API za programski pristup člancima i automatsko zakazivanje objava.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="api-key">API ključ</Label>
                  <div className="flex">
                    <Input 
                      id="api-key" 
                      value={apiKey}
                      readOnly
                      className="font-mono mr-2"
                    />
                    <Button 
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText(apiKey);
                        toast({
                          title: "Kopirano",
                          description: "API ključ je kopiran u međuspremnik",
                        });
                      }}
                    >
                      Kopiraj
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Dostupni API endpointi</h3>
                  <div className="border rounded-md p-4 space-y-4">
                    <div>
                      <h4 className="font-medium">GET /api/blog</h4>
                      <p className="text-sm text-gray-500">Dohvat svih članaka</p>
                      <code className="text-xs bg-gray-100 p-1 rounded mt-1 block">
                        ?apiKey={apiKey}
                      </code>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">GET /api/blog/:id</h4>
                      <p className="text-sm text-gray-500">Dohvat jednog članka prema ID</p>
                      <code className="text-xs bg-gray-100 p-1 rounded mt-1 block">
                        ?apiKey={apiKey}
                      </code>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">POST /api/blog</h4>
                      <p className="text-sm text-gray-500">Dodavanje novog članka</p>
                      <code className="text-xs bg-gray-100 p-1 rounded mt-1 block">
                        {"{ apiKey: '" + apiKey + "', post: { title: '', excerpt: '', ... } }"}
                      </code>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">PUT /api/blog/:id</h4>
                      <p className="text-sm text-gray-500">Ažuriranje postojećeg članka</p>
                      <code className="text-xs bg-gray-100 p-1 rounded mt-1 block">
                        {"{ apiKey: '" + apiKey + "', post: { id: 1, title: '', ... } }"}
                      </code>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">DELETE /api/blog/:id</h4>
                      <p className="text-sm text-gray-500">Brisanje članka</p>
                      <code className="text-xs bg-gray-100 p-1 rounded mt-1 block">
                        ?apiKey={apiKey}
                      </code>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">POST /api/blog/:id/schedule</h4>
                      <p className="text-sm text-gray-500">Zakazivanje objave članka</p>
                      <code className="text-xs bg-gray-100 p-1 rounded mt-1 block">
                        {"{ apiKey: '" + apiKey + "', publishDate: '2023-12-31' }"}
                      </code>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">POST /api/blog/publish-scheduled</h4>
                      <p className="text-sm text-gray-500">Objavljivanje svih zakazanih članaka čiji je datum prošao</p>
                      <code className="text-xs bg-gray-100 p-1 rounded mt-1 block">
                        {"{ apiKey: '" + apiKey + "' }"}
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Primjer korištenja</h3>
                  <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                    {`// Primjer fetch zahtjeva za dohvat svih članaka
fetch('/api/blog?apiKey=${apiKey}')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Primjer zakazivanja objave
fetch('/api/blog/1/schedule', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    apiKey: '${apiKey}',
    publishDate: '2023-12-31'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <BlogPostDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        currentPost={currentPost}
        setCurrentPost={setCurrentPost}
        isEditing={isEditing}
        onSubmit={handleDialogSubmit}
      />
    </div>
  );
};

export default AdminBlogPosts;
