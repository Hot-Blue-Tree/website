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
      className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
    >
      ← {text}
    </Link>
  );
}

export function ViewAllButton({ href, text }: ButtonProps) {
  return (
    <Link href={href} className="inline-flex items-center bg-gray-200 hover:bg-gray-300 active:ring-2 active:ring-gray-300 text-sm px-3 py-1 gap-1 rounded-full">
      {text}
      <IconCaretRightFilled className="-mr-1" />
    </Link>
  );
}
