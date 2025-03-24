import Link from 'next/link';

interface BackButtonProps {
  href: string;
  text: string;
}

export default function BackButton({ href, text }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
    >
      ← {text}
    </Link>
  );
}