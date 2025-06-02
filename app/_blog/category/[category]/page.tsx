import { getPostsByCategory, getAllCategories } from '../../../lib/blog';
import { notFound } from 'next/navigation';
import PostCard from '../../../../components/blog/PostCard';
import { BackButton } from '../../../../components/blog/Buttons';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = category.replace(/-/g, ' ');
  const categories = await getAllCategories();
  
  if (!categories.some(cat => cat.toLowerCase() === decodedCategory.toLowerCase())) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  const posts = await getPostsByCategory(decodedCategory);
  if (posts.length === 0) {
    return {
      title: 'No Posts Found',
      description: 'No posts found in this category.',
    };
  }

  const properCategoryName = posts[0].category;
  return {
    title: `Posts in ${properCategoryName}`,
    description: `Browse all blog posts in the ${properCategoryName} category.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const decodedCategory = category.replace(/-/g, ' ');
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
      <BackButton href="/blog/category" text="View all categories" />
      <h1 className="text-4xl mb-8">All posts in category: <span className="font-bold">{properCategoryName}</span></h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
} 