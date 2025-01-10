import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center">
                    <ul className="flex space-x-4">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/ai-deployments">AI Deployments</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/faqs">FAQs</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                    <div>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@hotbluetree.com</p>
                        <p>Address: 123 AI Street, Tech City</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </nav>
                <div className="mt-4 text-center">
                    <p>Copyright &copy; {new Date().getFullYear()} Hot Blue Tree Pty Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;