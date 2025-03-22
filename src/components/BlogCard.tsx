
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { useBlogPosts } from '@/hooks/useBlogPosts';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  categories: string[];
  id?: number;
}

const BlogCard = ({ title, excerpt, image, date, slug, categories, id }: BlogCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { updatePostClicks } = useBlogPosts();
  
  const handleClick = () => {
    if (id) {
      updatePostClicks(id);
    }
  };
  
  return (
    <article className="glass-card rounded-xl overflow-hidden hover-card transition-all duration-300">
      <Link to={`/blog/${slug}`} className="block" onClick={handleClick}>
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              imageLoaded ? "image-blur-loaded" : "image-blur-loading"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span 
                key={index}
                className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2.5 py-0.5"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <time dateTime={date}>{date}</time>
          </div>
        </div>
        <Link to={`/blog/${slug}`} className="group" onClick={handleClick}>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {excerpt}
          </p>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
