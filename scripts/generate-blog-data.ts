import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'app/_posts');
const outputPath = path.join(process.cwd(), 'app/lib/blog-data.json');

interface BlogMetadata {
  title: string;
  date: string;
  tags: string[];
  author: string;
  category: string;
  excerpt: string;
  doNotPublish?: boolean;
}

function parseMetadata(jsonPath: string): BlogMetadata {
  const metadata = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  
  // Normalize tags to lowercase
  if (metadata.tags && Array.isArray(metadata.tags)) {
    metadata.tags = metadata.tags.map((tag: string) => tag.toLowerCase());
  }
  
  return metadata;
}

async function generateBlogData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const jsonPath = path.join(postsDirectory, `${slug}.json`);
        
        // Read markdown file
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { content } = matter(fileContents);
        
        // Parse metadata using the new function
        const metadata = parseMetadata(jsonPath);
        
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
  const filteredPosts = posts
    .filter(post => !post.doNotPublish)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  // Write the generated data to a JSON file
  fs.writeFileSync(outputPath, JSON.stringify(filteredPosts, null, 2));
  console.log('Blog data generated successfully!');
}

generateBlogData().catch(console.error); 