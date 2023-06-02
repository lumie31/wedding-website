import './globals.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Fiyin weds Tobi',
  description: "Fiyin & Tobi's wedding website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
