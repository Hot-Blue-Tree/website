import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

const ContactForm: React.FC = () => {
    return (
        <>
            <form className="grid grid-cols-1 gap-4">
                <Input label="Name" type="text" placeholder="John Doe" />
                <Input label="Email" type="email" placeholder="john@example.com" className="w-full" />
                <Button
                    type='submit'
                    size='lg'
                    className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white"
                >
                    Submit
                </Button>
            </form>
        </>
    );
};

export default ContactForm;