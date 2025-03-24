import { getAllPosts, getAllCategories } from '../lib/blog';
import PostCard from '../../components/blog/PostCard';
import CategoryCard from '../../components/blog/CategoryCard';
import { ViewAllButton } from '../../components/blog/Buttons';

export default async function BlogIndex() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  // Get only the 3 most recent posts
  const recentPosts = posts.slice(0, 3);
  
  // get number of posts in each category
  const categoryPostCounts = categories.map(category => ({
    category,
    count: posts.filter(post => post.category === category).length,
  }));

  // get only the top three categories
  const topCategories = categoryPostCounts.sort((a, b) => b.count - a.count).slice(0, 3);

  return (
    <div className="container max-w-5xl mx-auto flex-1 py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Blue Tree Blog</h1>

      <section className="mb-12">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-semibold mb-4">Recent posts</h2>
          <ViewAllButton href="/blog/post" text="View all posts" />
        </div>
        <div className="flex flex-col gap-4">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-semibold mb-4">Top categories</h2>
          <ViewAllButton href="/blog/category" text="View all categories" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topCategories.map((category) => (
            <CategoryCard key={category.category} category={category.category} count={category.count} />
          ))}
        </div>
      </section>
    </div>
  );
} 