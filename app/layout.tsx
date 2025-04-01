import './globals.css'
import Header from "../components/Header";
import Footer from '../components/Footer';
import {Providers} from "./providers";
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Hot Blue Tree',
  icons: {
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-icon-180x180.png', sizes: '180x180' },
    ],
    icon: [
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    other: [
      { rel: 'manifest', url: '/manifest.json' },
    ]
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-144x144.png',
  }
};

export const viewport: Viewport = {
  themeColor: '#ffffff'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
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
