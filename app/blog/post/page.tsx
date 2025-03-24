'use client';

import { useEffect, useState } from 'react';
import { BlogPost, getAllPosts } from '../../lib/blog';
import Link from 'next/link';
import PostCard from '../../../components/blog/PostCard';
import { IconCaretRightFilled } from '../../../components/Icons';
import { getTagColor } from '../../../components/blog/helpers';
import { BackButton } from '../../../components/blog/Buttons';

type SortOption = 'date' | 'title';
type SortOrder = 'asc' | 'desc';

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
      setFilteredPosts(allPosts);
      
      // Extract unique authors and tags
      const uniqueAuthors = Array.from(new Set(allPosts.map((post: BlogPost) => post.author))) as string[];
      const uniqueTags = Array.from(new Set(allPosts.flatMap((post: BlogPost) => post.tags))) as string[];
      setAuthors(uniqueAuthors.sort());
      setTags(uniqueTags.sort());
    };
    
    loadPosts();
  }, []);

  useEffect(() => {
    let filtered = [...posts];

    // Apply author filter
    if (selectedAuthor) {
      filtered = filtered.filter(post => post.author === selectedAuthor);
    }

    // Apply tag filters
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.every(tag => post.tags.includes(tag))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortOption === 'date') {
        return sortOrder === 'desc' 
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return sortOrder === 'desc'
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title);
      }
    });

    setFilteredPosts(filtered);
  }, [posts, sortOption, sortOrder, selectedAuthor, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="container max-w-5xl mx-auto flex-1 px-4 py-8">
      <BackButton href="/blog" text="Blog home" />
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-4">
          <select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="px-4 py-2 border rounded-xl"
            aria-label="Filter by author"
          >
            <option value="">Any author</option>
            {authors.map(author => (
              <option key={author} value={author}>{author}</option>
            ))}
          </select>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="px-4 py-2 border rounded-xl"
            aria-label="Sort posts by"
          >
            <option value="date">Sort by date</option>
            <option value="title">Sort by title</option>
          </select>

          <button
            onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
            className="px-4 py-2 border rounded-full flex items-center gap-2"
            aria-label={`Sort order: ${sortOrder === 'desc' ? 'descending' : 'ascending'}`}
          >
            {sortOrder === 'desc' ? "Descending" : "Ascending"}
            <IconCaretRightFilled className={`${sortOrder === 'desc' ? '-rotate-90' : 'rotate-90'} transition-transform`} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{ backgroundColor: selectedTags.includes(tag) ? getTagColor(tag, 1) : "#88888820" }}
              className="px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts List */}
      <div className="flex flex-col gap-4">
        {filteredPosts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
