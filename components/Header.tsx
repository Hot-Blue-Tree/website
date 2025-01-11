import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.jpg';

const Header: React.FC = () => {
    return (
        <header className='flex flex-col justify-center items-center p-4'>
            <Link href='/'>
                <Image src={logo} alt='Hot Blue Tree logo' width={200} height={200} />
            </Link>
        </header>
    );
};

export default Header;