import Link from "next/link";
import { TagBadge } from "./TagBadge";

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt?: string;
    tags: string[];
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/post/${post.slug}`} className="group">
      <article className="border bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-semibold group-hover:text-blue-600 mb-2">
          {post.title}
        </h2>
        <div className="text-gray-600 mb-4">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        {post.excerpt && <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: post.excerpt }} />}
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      </article>
    </Link>
  );
}
