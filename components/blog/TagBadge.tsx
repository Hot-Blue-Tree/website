import { getTagColor } from "./helpers";

interface TagBadgeProps {
  tag: string;
}

export const TagBadge: React.FC<TagBadgeProps> = ({ tag }) => {
  return (
    <span
      key={tag}
      className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm uppercase"
      style={{ backgroundColor: getTagColor(tag) }}
    >
      {tag}
    </span>
  );
};
