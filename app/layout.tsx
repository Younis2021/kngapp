import { ExitIntentPopup } from '@/components/exit-intent-popup';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://knghomebuyers.com'),
  title: {
    default: 'KNG Home Buyers | We Buy Houses Fast for Cash in California',
    template: '%s | KNG Home Buyers'
  },
  description: 'KNG Home Buyers is your trusted cash home buyer in California. We buy houses in any condition - no repairs needed, no realtor fees, close in 7 days. Get your fair cash offer within 24 hours.',
  keywords: [
    'cash home buyers',
    'sell house fast',
    'we buy houses',
    'sell my house for cash',
    'cash for houses',
    'home buyers near me',
    'sell house as is',
    'cash home buyer',
    'KNG Home Buyers',
    'sell house California',
    'cash offer for house',
    'sell house without realtor',
    'quick house sale',
    'sell inherited house',
    'stop foreclosure',
    'sell rental property',
    'Santa Clarita home buyers',
    'Los Angeles home buyers',
    'Ventura County home buyers',
    'San Fernando Valley home buyers'
  ],
  icons: {
    icon: [
      {
        url: 'https://ik.imagekit.io/pcet3dvcu/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: 'https://ik.imagekit.io/pcet3dvcu/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    shortcut: [
      {
        url: 'https://ik.imagekit.io/pcet3dvcu/favicon.ico',
        sizes: 'any'
      }
    ],
    apple: [
      {
        url: 'https://ik.imagekit.io/pcet3dvcu/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  },
  manifest: 'https://ik.imagekit.io/pcet3dvcu/site.webmanifest',
  authors: [{ name: 'KNG Home Buyers' }],
  creator: 'KNG Home Buyers',
  publisher: 'KNG Home Buyers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://knghomebuyers.com',
    title: 'KNG Home Buyers | We Buy Houses Fast for Cash in California',
    description: 'KNG Home Buyers is your trusted cash home buyer in California. We buy houses in any condition - no repairs needed, no realtor fees, close in 7 days. Get your fair cash offer within 24 hours.',
    siteName: 'KNG Home Buyers'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KNG Home Buyers | We Buy Houses Fast for Cash in California',
    description: 'KNG Home Buyers is your trusted cash home buyer in California. We buy houses in any condition - no repairs needed, no realtor fees, close in 7 days. Get your fair cash offer within 24 hours.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://knghomebuyers.com'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://ik.imagekit.io/pcet3dvcu/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://ik.imagekit.io/pcet3dvcu/favicon-16x16.png"
        />
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/pcet3dvcu/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://ik.imagekit.io/pcet3dvcu/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          href="https://ik.imagekit.io/pcet3dvcu/site.webmanifest"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  );
}