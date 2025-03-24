import { BlogPost } from './types';
import blogData from './blog-data.json';

const posts: BlogPost[] = blogData;

export async function getAllPosts(): Promise<BlogPost[]> {
  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return posts.find(post => post.slug === slug) || null;
}

export async function getAllCategories(): Promise<string[]> {
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories).sort();
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
} 