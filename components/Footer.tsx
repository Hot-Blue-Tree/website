import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <nav className="flex justify-around items-center">
                    <ul className="flex space-x-4">
                        <li>
                            <Button
                                as={Link} 
                                href="/contact"
                                color='primary'
                                variant='solid'
                            >
                                Get in touch
                            </Button>
                        </li>
                    </ul>
                    {/* <div className="flex space-x-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div> */}
                </nav>
                <div className="mt-4 text-center">
                    <p>Copyright &copy; {new Date().getFullYear()} Hot Blue Tree Pty Ltd.<br/>All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;