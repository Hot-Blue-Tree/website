import React from 'react';
import LogoWithText, { LogoHtmlText } from './Logo';

const Header: React.FC = () => {
    return (
        <header className='flex flex-col justify-center items-center p-4'>
            <LogoHtmlText />
        </header>
    );
};

export default Header;