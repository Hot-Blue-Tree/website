import Link from 'next/link';

interface CategoryCardProps {
  category: string;
  count: number;
}

export default function CategoryCard({ category, count }: CategoryCardProps) {
  return (
    <Link
      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
      className="flex flex-row justify-between items-center border bg-white rounded-xl space-x-4 p-4 shadow-sm hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg font-medium text-slate-800">{category}</h3>
      <CategoryCountBadge count={count} />
    </Link>
  );
}

const CategoryCountBadge = ({ count }: { count: number }) => {
  return (
    <span className="text-sm bg-slate-200 px-4 py-1 rounded-full">
      {count} post{count === 1 ? '' : 's'}
    </span>
  );
}
