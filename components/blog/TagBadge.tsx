import { getTagColor } from "../../app/lib/blog";

interface TagBadgeProps {
  tag: string;
}

export const TagBadge: React.FC<TagBadgeProps> = ({ tag }) => {
  return (
    <span
      key={tag}
      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm uppercase"
      style={{ backgroundColor: getTagColor(tag) }}
    >
      {tag}
    </span>
  );
};
