
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogPostsSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BlogPostsSearch = ({ searchQuery, setSearchQuery }: BlogPostsSearchProps) => {
  return (
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
  );
};

export default BlogPostsSearch;
