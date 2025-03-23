
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Eye, ArrowUpDown } from "lucide-react";
import { BlogPost } from "@/types/BlogTypes";

interface BlogPostsTableProps {
  sortedBlogPosts: BlogPost[];
  sortConfig: {key: keyof BlogPost, direction: 'asc' | 'desc'} | null;
  handleSortClick: (key: keyof BlogPost) => void;
  handleEditClick: (post: BlogPost) => void;
  handleDeleteClick: (id: number) => void;
  togglePublishStatus: (id: number) => void;
}

const BlogPostsTable = ({ 
  sortedBlogPosts, 
  sortConfig, 
  handleSortClick, 
  handleEditClick, 
  handleDeleteClick,
  togglePublishStatus
}: BlogPostsTableProps) => {
  return (
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
  );
};

export default BlogPostsTable;
