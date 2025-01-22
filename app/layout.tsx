import './globals.css'
import Header from "../components/Header";
import Footer from '../components/Footer';
import {Providers} from "./providers";

import favicon_appletouch from "/public/apple-touch-icon.png";
import favicon_32px from "/public/favicon-32x32.png";
import favicon_16px from "/public/favicon-16x16.png";

import logo from '../public/logo.jpg';
import logo_notext from '../public/logo_notext.jpg';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Hot Blue Tree</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href={favicon_appletouch.src}/>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon_32px.src}/>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon_16px.src}/>
        <link rel="manifest" href="/public/site.webmanifest"/>
      </head>
      <body className="">
        <Providers>
          <div className='w-full min-h-screen h-0 flex flex-col'>
            <Header />        
              {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
