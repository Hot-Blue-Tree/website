"use client";
import React, { useEffect, useState } from 'react';

const PipedriveContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Pipedrive script after component mounts
    const script = document.createElement('script');
    script.src = 'https://webforms.pipedrive.com/f/loader';
    script.async = true;
    
    // Set loading to false once the script has loaded
    script.onload = () => {
      // Wait for 300ms before setting isLoading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    };
    
    document.body.appendChild(script);

    // Cleanup function to remove script on unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center h-[576px] py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
          <span className="sr-only">Loading form</span>
        </div>
      )}
      <div 
        className="pipedriveWebForms" 
        data-pd-webforms="https://webforms.pipedrive.com/f/6GQsvxBHwTcEBhHfMXXvIN9dm0gkNI3fmwm5bA668XTLUB8mMw0yx4VI6QuSzhma3h"
      />
    </div>
  );
};

export default PipedriveContactForm;