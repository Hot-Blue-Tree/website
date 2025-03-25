import Link from 'next/link';
import { IconCaretRightFilled } from '../Icons';

interface ButtonProps {
  href: string;
  text: string;
}

export function BackButton({ href, text }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center uppercase hover:bg-gray-200 active:ring-2 active:ring-gray-200 text-sm px-3 py-1 gap-1 rounded-full mb-4"
    >
      <IconCaretRightFilled className="rotate-180 -ml-1" />
      {text}
    </Link>
  );
}

export function ViewAllButton({ href, text }: ButtonProps) {
  return (
    <Link href={href} className="inline-flex items-center hover:bg-gray-200 active:ring-2 active:ring-gray-200 text-sm px-3 py-1 gap-1 rounded-full">
      {text}
      <IconCaretRightFilled className="-mr-1" />
    </Link>
  );
}
