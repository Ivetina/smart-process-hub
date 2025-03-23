
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { BlogPost } from "@/types/BlogTypes";
import { useToast } from "@/components/ui/use-toast";

interface BlogPostDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  currentPost: Partial<BlogPost>;
  setCurrentPost: React.Dispatch<React.SetStateAction<Partial<BlogPost>>>;
  isEditing: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const BlogPostDialog = ({ 
  isOpen, 
  onOpenChange, 
  currentPost, 
  setCurrentPost, 
  isEditing, 
  onSubmit 
}: BlogPostDialogProps) => {
  const [categoryInput, setCategoryInput] = useState('');
  const { toast } = useToast();

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

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Uredi članak' : 'Novi članak'}</DialogTitle>
          <DialogDescription>
            {isEditing 
              ? 'Uredite detalje postojećeg članka.' 
              : 'Dodajte novi članak popunjavanjem sljedećih podataka.'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={onSubmit} className="space-y-4">
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
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Odustani
            </Button>
            <Button type="submit">
              {isEditing ? 'Spremi promjene' : 'Dodaj članak'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostDialog;
