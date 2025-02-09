import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../public/logo.jpg';
import logo_notext from '../public/logo_notext.jpg';

export const LogoHtmlText: React.FC = () => {
    return (
        <Link href='/'>
            <div className='flex flex-row space-x-4 items-center justify-center'>
                <Image src={logo_notext} alt='Hot Blue Tree logo' width={100} height={100} />
                <div className='flex flex-col'>
                    <span className='bg-brand-blue py-px px-8 rounded-xl'>
                        <h1 className='text-2xl text-center font-bold tracking-wider text-white uppercase'>Hot Blue Tree</h1>
                    </span>
                    <div className="flex flex-row justify-around items-center gap-2 px-2">
                        <hr className='flex-1 h-1 bg-brand-blue'/>
                        <h2 className='text-lg text-center font-bold tracking-widest text-brand-blue uppercase'>AI Consulting</h2>
                        <hr className='flex-1 h-1 bg-brand-blue'/>
                    </div>
                    <p className='text-lg text-center font-medium text-brand-blue -mt-1.5'>Rooted in your Success</p>
                </div>
            </div>
        </Link>
    );
};

export const LogoWithText: React.FC = () => {
    return (
        <Link href='/'>
            <Image src={logo} alt='Hot Blue Tree logo' width={200} height={200} />
        </Link>
    );
};

export default LogoWithText;