import React from 'react';
import Link from 'next/link';

const ContactForm: React.FC = () => {
    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Schedule a Free Consultation</h2>
            <p className="text-lg mb-6 text-center">Ready to explore how AI can transform your business? Schedule a free consultation with our team to discuss a partnership.</p>
            <form className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
                <label>
                    <span className="block mb-1">Name</span>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-2 rounded border" />
                </label>
                <label>
                    <span className="block mb-1">Email address</span>
                    <input type="email" placeholder="" className="w-full px-4 py-2 rounded border" />
                </label>
                <button type='submit' className="bg-brand-blue text-white py-2 px-4 rounded">Schedule a Consultation</button>
            </form>
        </section>
    );
};

export default ContactForm;