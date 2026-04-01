import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Anandalok | Autism Care Sanctuary',
  description: "Kolkata's first residential sanctuary for individuals with autism. A home where 35 extraordinary people live, learn, create, and thrive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,700&family=IBM+Plex+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="relative w-full bg-background selection:bg-accent selection:text-white">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        
      </body>
    </html>
  );
}
