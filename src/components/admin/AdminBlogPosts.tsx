
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BlogPost } from "@/types/BlogTypes";
import BlogPostsTable from './BlogPostsTable';
import BlogPostsSearch from './BlogPostsSearch';
import BlogPostDialog from './BlogPostDialog';
import { useAdminBlogPosts } from '@/hooks/useAdminBlogPosts';

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
    togglePublishStatus
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
          <BlogPostsSearch 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
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
