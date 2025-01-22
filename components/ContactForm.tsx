"use client";

import React, { FormEventHandler } from 'react';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { IconCheck, IconExclaimOutline, IconThreeQuarterCircle } from './Icons';

const ContactForm: React.FC = () => {
    const [formState, setFormState] = React.useState<"" | "success" | "error" | "loading">("");

    const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault();
      setFormState("loading");
      const formData = new FormData(event.target as HTMLFormElement);
  
      formData.append("access_key", "755d11e5-c696-452e-8f8d-68cfe0f7d697");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setFormState("success");
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Error", data);
        setFormState("error");
      }
    };

    return (
        <>
            <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-4"
            >
                <Input 
                    name='name'
                    label="Name" 
                    type="text" 
                    placeholder="John Doe"
                    required
                />
                <Input 
                    name='email'
                    label="Email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full"
                    required
                />
                <Button
                    type='submit'
                    size='lg'
                    className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white"
                >
                    Submit
                </Button>
            </form>
            {formState === "success" && (
                <div className="flex flex-row items-center justify-center text-blue-500 bg-white gap-4 p-2 rounded-xl mt-4">
                    <span className="text-3xl">
                        <IconCheck />
                    </span>
                    <p>Sent - You're on your way to greater success with AI!</p>
                </div>
            )
            || formState === "error" && (
                <div className="flex flex-row items-center justify-center text-red-700 bg-white gap-4 p-2 rounded-xl mt-4">
                    <span className="text-3xl">
                        <IconExclaimOutline />
                    </span>
                    <p>Oops! There was a problem, please try again.</p>
                </div>
            )
            || formState === "loading" && (
                <div className="flex flex-row items-center justify-center text-blue-500 bg-white gap-4 p-2 rounded-xl mt-4">
                    <span className="text-3xl animate-spinner-ease-spin">
                        <IconThreeQuarterCircle />
                    </span>
                    <p>Sending...</p>
                </div>
            )
            || null
            }
        </>
    );
};

export default ContactForm;