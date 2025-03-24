import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'app/_posts');

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

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const jsonPath = path.join(postsDirectory, `${slug}.json`);
        
        // Read markdown file
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { content } = matter(fileContents);
        
        // Read JSON metadata
        const metadata = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        
        // Convert markdown to HTML
        const processedContent = await remark()
          .use(gfm)
          .use(html)
          .process(content);
        const contentHtml = processedContent.toString();

        return {
          slug,
          content: contentHtml,
          ...metadata,
        };
      })
  );

  // Filter out posts marked as doNotPublish and sort by date
  return allPostsData
    .filter(post => !post.doNotPublish)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const jsonPath = path.join(postsDirectory, `${slug}.json`);
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  
  // Read JSON metadata
  const metadata = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  
  // Convert markdown to HTML
  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    ...metadata,
  };
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories).sort();
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
} 

export function getTagColor(tagName: string): string {
  // hash the name of the tag and use it to get a hue value (0-360)
  const hash = tagName.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  const hue = hash % 360;
  return `hsla(${hue}, 100%, 90%, 0.5)`;
}
