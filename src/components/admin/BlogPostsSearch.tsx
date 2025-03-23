
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface BlogPostsSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  publishedFilter: 'all' | 'published' | 'drafts';
  setPublishedFilter: (filter: 'all' | 'published' | 'drafts') => void;
  availableCategories: string[];
}

const BlogPostsSearch = ({ 
  searchQuery, 
  setSearchQuery,
  selectedCategories,
  setSelectedCategories,
  publishedFilter,
  setPublishedFilter,
  availableCategories
}: BlogPostsSearchProps) => {
  
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPublishedFilter('all');
  };
  
  const getPublishedFilterLabel = () => {
    switch(publishedFilter) {
      case 'published': return 'Objavljeni';
      case 'drafts': return 'Nacrti';
      default: return 'Svi članci';
    }
  };
  
  const hasActiveFilters = selectedCategories.length > 0 || publishedFilter !== 'all';
  
  return (
    <div className="mb-4 space-y-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Pretraži članke..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="flex gap-2 items-center flex-wrap">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="h-3.5 w-3.5 mr-2" />
              Filtriraj
              {hasActiveFilters && <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-100">{selectedCategories.length + (publishedFilter !== 'all' ? 1 : 0)}</Badge>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>Status objave</DropdownMenuLabel>
            <DropdownMenuCheckboxItem 
              checked={publishedFilter === 'all'}
              onCheckedChange={() => setPublishedFilter('all')}
            >
              Svi članci
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={publishedFilter === 'published'}
              onCheckedChange={() => setPublishedFilter('published')}
            >
              Samo objavljeni
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={publishedFilter === 'drafts'}
              onCheckedChange={() => setPublishedFilter('drafts')}
            >
              Samo nacrti
            </DropdownMenuCheckboxItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuLabel>Kategorije</DropdownMenuLabel>
            {availableCategories.length > 0 ? (
              availableCategories.map(category => (
                <DropdownMenuCheckboxItem 
                  key={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryToggle(category)}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              ))
            ) : (
              <div className="px-2 py-1.5 text-sm text-muted-foreground">Nema dostupnih kategorija</div>
            )}
            
            {hasActiveFilters && (
              <>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5">
                  <Button variant="ghost" size="sm" className="w-full h-8" onClick={handleClearFilters}>
                    Poništi filtere
                  </Button>
                </div>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        
        {publishedFilter !== 'all' && (
          <Badge variant="outline" className="h-8 px-3 gap-2 hover:bg-background cursor-pointer" onClick={() => setPublishedFilter('all')}>
            {getPublishedFilterLabel()}
            <button className="text-muted-foreground hover:text-foreground">×</button>
          </Badge>
        )}
        
        {selectedCategories.map(category => (
          <Badge key={category} variant="outline" className="h-8 px-3 gap-2 hover:bg-background cursor-pointer" onClick={() => handleCategoryToggle(category)}>
            {category}
            <button className="text-muted-foreground hover:text-foreground">×</button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsSearch;
