import './globals.css'
import Header from "../components/Header";
import Footer from '../components/Footer';

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
      <body className="w-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
