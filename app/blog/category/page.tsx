import { getAllCategories, getAllPosts } from '../../lib/blog';
import CategoryCard from '../../../components/blog/CategoryCard';
import BackButton from '../../../components/blog/BackButton';

export default async function CategoryIndex() {
  const [categories, posts] = await Promise.all([
    getAllCategories(),
    getAllPosts(),
  ]);

  // Count posts in each category
  const categoryCount = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="container max-w-5xl mx-auto flex-1 py-8 px-4">
      <BackButton href="/blog" text="Blog home" />
      <h1 className="text-4xl font-bold mb-8">All categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category} category={category} count={categoryCount[category]} />
        ))}
      </div>
    </div>
  );
}
