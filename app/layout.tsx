import './globals.css'
import Header from "../components/Header";
import Footer from '../components/Footer';
import {Providers} from "./providers";

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
