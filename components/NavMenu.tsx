'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@nextui-org/button';

export const HeaderNavMenu: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <div className='flex flex-row justify-center items-center gap-4'>
      {menuItems.map((item) => (
        <Link 
          key={item.href} 
          href={item.href}
          aria-current={pathname === item.href ? 'page' : undefined}
          className="text-white aria-[current=page]:underline hover:bg-white/15 active:ring-2 active:ring-white/15 py-2 px-4 rounded-xl"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export const FooterNavMenu: React.FC = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-4'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  );
};