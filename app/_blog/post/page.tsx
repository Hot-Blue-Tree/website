"use client";

import { useEffect, useState } from "react";
import { getAllPosts } from "../../lib/blog";
import PostCard from "../../../components/blog/PostCard";
import { getTagColor } from "../../../components/blog/helpers";
import { BackButton } from "../../../components/blog/Buttons";
import { BlogPost } from "../../lib/types";
import { IconSearch } from "../../../components/Icons";

type SortOption = "date" | "title";
type SortOrder = "asc" | "desc";

function generateSearchExcerpt(content: string, searchQuery: string, excerptLength: number = 75): string | undefined {
  if (!searchQuery.trim() || !content) return undefined;
  
  // Strip HTML tags and decode HTML entities
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };
  
  const plainContent = stripHtml(content);
  const query = searchQuery.toLowerCase();
  const contentLower = plainContent.toLowerCase();
  const index = contentLower.indexOf(query);
  
  if (index === -1) return undefined;
  
  const start = Math.max(0, index - excerptLength);
  const end = Math.min(plainContent.length, index + query.length + excerptLength);
  
  let excerpt = plainContent.slice(start, end);
  
  // Add ellipsis if we're not at the start/end of the content
  if (start > 0) excerpt = '...' + excerpt;
  if (end < plainContent.length) excerpt = excerpt + '...';
  
  // Highlight the search query by wrapping it in a mark tag
  const queryRegex = new RegExp(searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  excerpt = excerpt.replace(queryRegex, match => `<mark class="bg-yellow-200 -z-10">${match}</mark>`);
  
  return excerpt;
}

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [authors, setAuthors] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setFilteredPosts(allPosts);

      // Extract unique authors and tags
      const uniqueAuthors = Array.from(
        new Set(allPosts.map((post: BlogPost) => post.author))
      ) as string[];
      const uniqueTags = Array.from(
        new Set(allPosts.flatMap((post: BlogPost) => post.tags))
      ) as string[];
      setAuthors(uniqueAuthors.sort());
      setTags(uniqueTags.sort());
    };

    loadPosts();
  }, []);

  useEffect(() => {
    let filtered = [...posts];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.map(post => {
        const matchesSearch = 
          (post.title || '').toLowerCase().includes(query) ||
          (post.author || '').toLowerCase().includes(query) ||
          (post.content || '').toLowerCase().includes(query);
        
        if (matchesSearch) {
          // Generate dynamic excerpt if there's a content match
          const searchExcerpt = generateSearchExcerpt(post.content || '', searchQuery);
          return {
            ...post,
            excerpt: searchExcerpt || post.excerpt // Fall back to original excerpt if no content match
          };
        }
        return post;
      }).filter(post => 
        (post.title || '').toLowerCase().includes(query) ||
        (post.author || '').toLowerCase().includes(query) ||
        (post.content || '').toLowerCase().includes(query)
      );
    }

    // Apply author filter
    if (selectedAuthor) {
      filtered = filtered.filter((post) => post.author === selectedAuthor);
    }

    // Apply tag filters
    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.every((tag) => post.tags.includes(tag))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortOption === "date") {
        return sortOrder === "desc"
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return sortOrder === "desc"
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title);
      }
    });

    setFilteredPosts(filtered);
  }, [posts, sortOption, sortOrder, selectedAuthor, selectedTags, searchQuery]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as string;

    const [option, order] = value.split(" ");

    setSortOption(option as SortOption);
    setSortOrder(order as SortOrder);
  };

  return (
    <div className="container max-w-5xl mx-auto flex-1 px-4 py-8">
      <BackButton href="/blog" text="Blog home" />
      <h1 className="text-3xl font-bold mb-8">All blog posts</h1>

      {/* Search */}
      <div className="mb-4 relative">
        <div className="relative flex items-center">
          <IconSearch className="absolute left-3 w-5 h-5 text-slate-400" />
          <input
            type="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search posts"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap mb-8 gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="sort-filter" className="font-medium">
            Sort by
          </label>
          <select
            id="sort-filter"
            value={`${sortOption} ${sortOrder}`}
            onChange={handleSortChange}
            className="px-2 py-2 border rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Sort posts by"
          >
            <option value="date desc">newest first</option>
            <option value="date asc">oldest first</option>
            <option value="title desc">Z to A</option>
            <option value="title asc">A to Z</option>
          </select>
        </div>
        <div className="flex flex-wrap space-x-8">
          <div className="flex items-center gap-2">
            <label htmlFor="author-filter" className="font-medium">
              Filter by author
            </label>
            <select
              id="author-filter"
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="px-2 py-2 border rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Filter by author"
            >
              <option value="">anyone</option>
              {authors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tag-filter" className="font-medium">
            Filter by tag:
          </label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                style={{
                  backgroundColor: selectedTags.includes(tag)
                    ? getTagColor(tag, 1)
                    : "#88888820",
                }}
                className="px-4 py-2 md:px-3 md:py-1 rounded-full text-sm uppercase hover:opacity-75"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="flex flex-col gap-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
