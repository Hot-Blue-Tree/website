import { getPostsByCategory, getAllCategories } from '../../../lib/blog';
import { notFound } from 'next/navigation';
import PostCard from '../../../../components/blog/PostCard';
import BackButton from '../../../../components/blog/BackButton';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const decodedCategory = params.category.replace(/-/g, ' ');
  const categories = await getAllCategories();
  
  // Check if the category exists
  if (!categories.some(cat => cat.toLowerCase() === decodedCategory.toLowerCase())) {
    notFound();
  }

  const posts = await getPostsByCategory(decodedCategory);

  if (posts.length === 0) {
    notFound();
  }

  // Get the proper category name from the first post
  const properCategoryName = posts[0].category;

  return (
    <div className="container max-w-5xl mx-auto flex-1 py-8 px-4">
      <div className="flex flex-col mb-8">
        <BackButton href="/blog/category" text="View all categories" />
        <h1 className="text-4xl">All posts in category: <span className="font-bold">{properCategoryName}</span></h1>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
} 