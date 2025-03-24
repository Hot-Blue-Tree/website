export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  excerpt?: string;
  doNotPublish?: boolean;
} 