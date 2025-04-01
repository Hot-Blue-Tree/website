import React from 'react';
import Link from 'next/link';
import { HeaderNavMenu } from './NavMenu';
import { LogoSvg } from './Logo';
const Header: React.FC = () => {
    return (
        <header className='flex flex-row justify-center items-center w-full bg-brand-blue p-4'>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center max-w-7xl w-full gap-4'>
                <Link href='/' className='flex flex-col md:flex-row items-center justify-center text-white gap-4'>
                    <div className='flex items-center justify-center h-28 md:h-20 aspect-square rounded-full bg-gradient-to-t from-blue-500 to-cyan-500'>
                        <LogoSvg />
                    </div>
                    <span className='text-white text-3xl font-bold uppercase'>Hot Blue Tree</span>
                </Link>
                <HeaderNavMenu />
            </div>
        </header>
    );
};

export default Header;