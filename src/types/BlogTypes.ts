
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
  scheduledPublishDate?: string; // Dodano novo polje za zakazanu objavu
}

// Definiramo tip za API odgovore
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
