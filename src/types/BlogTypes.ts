
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  slug?: string;
  published: boolean;
  views?: number;
  clicks?: number;
  categories: string[];
}
