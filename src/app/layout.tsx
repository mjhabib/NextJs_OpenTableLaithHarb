import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJs OpenTable App',
  description: 'Followed by Laith Harb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='bg-gray-100 min-h-screen w-screen'>
          <div className='max-w-screen-2xl m-auto bg-white'>
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
