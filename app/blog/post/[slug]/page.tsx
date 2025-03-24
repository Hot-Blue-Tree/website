import BackButton from "../../../../components/blog/BackButton";
import { TagBadge } from "../../../../components/blog/TagBadge";
import { getAllPosts, getPostBySlug } from "../../../lib/blog";
import type { BlogPost } from "../../../lib/blog";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.title,
    description:
      post.excerpt || `${post.title} - A blog post by ${post.author}`,
    openGraph: {
      title: post.title,
      description:
        post.excerpt || `${post.title} - A blog post by ${post.author}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description:
        post.excerpt || `${post.title} - A blog post by ${post.author}`,
    },
    alternates: {
      canonical: `/blog/post/${params.slug}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="container max-w-5xl mx-auto flex-1 py-8 px-4">
      <BackButton href="/blog" text="Blog home" />
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-4">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      </header>
      <div
        className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm
            prose-pre:bg-gray-50 prose-pre:text-gray-900 prose-pre:border prose-pre:border-gray-200
            prose-table:w-full prose-th:bg-gray-50 prose-th:p-3 prose-td:p-3
            prose-table:border prose-table:border-gray-200
            prose-td:border prose-td:border-gray-200
            prose-th:border prose-th:border-gray-200
            prose-table:border-collapse"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
