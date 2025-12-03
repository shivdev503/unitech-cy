import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "UNITECHCYBER — IT Hardware, Software & Web App Solutions (Gurgaon, Delhi, Noida)",
  description: "Specialized IT hardware maintenance, software installation & licensing, and web & app development for businesses in Gurgaon, Delhi & Noida. Onsite & remote support — free consultation.",
  keywords: "it hardware maintenance gurgaon, software installation delhi, web app development noida, managed it services ncr, it support gurugram, software licensing delhi, web development gurgaon",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', type: 'image/png' },
      { url: '/favicon-32x32.png', type: 'image/png' },
    ],
    apple: '/cyberlogo.png',
    shortcut: '/cyberlogo.png',
  },
  metadataBase: new URL('https://unitechcyber.com'),
  alternates: {
    canonical: 'https://www.unitechcyber.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.unitechcyber.com',
    title: 'UNITECHCYBER — IT Hardware, Software & Web App Solutions (Gurgaon, Delhi, Noida)',
    description: 'Specialized IT hardware maintenance, software installation & licensing, and web & app development for businesses in Gurgaon, Delhi & Noida. Onsite & remote support — free consultation.',
    siteName: 'UNITECHCYBER',
    // images: [
    //   {
    //     url: 'https://unitechcyber.com/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'UNITECHCYBER - IT Hardware, Software & Web App Solutions',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNITECHCYBER — IT Hardware, Software & Web App Solutions (Gurgaon, Delhi, Noida)',
    description: 'Specialized IT hardware maintenance, software installation & licensing, and web & app development for businesses in Gurgaon, Delhi & Noida. Onsite & remote support — free consultation.',
    // images: ['https://unitechcyber.com/og-image.jpg'],
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* LocalBusiness JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'UNITECHCYBER',
              url: 'https://unitechcyber.com',
              logo: 'https://unitechcyber.com/cyberlogo.png',
              telephone: '+919759654902',
              email: 'unitechcyber1@gmail.com',
              description: 'IT hardware maintenance, software installation & licensing, and web & app development with onsite and remote support.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Sector 48',
                addressLocality: 'Gurugram',
                addressRegion: 'Haryana',
                postalCode: '122018',
                addressCountry: 'IN',
              },
              openingHours: 'Mo-Sa 09:00-18:00',
              serviceArea: [
                { '@type': 'Place', name: 'Gurgaon' },
                { '@type': 'Place', name: 'Delhi' },
                { '@type': 'Place', name: 'Noida' },
              ],
              // sameAs: [
              //   'https://www.linkedin.com/company/unitechcyber',
              //   'https://facebook.com/unitechcyber',
              // ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Core Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'IT Hardware Maintenance' },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'Software Installation & Licensing' },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'Web & App Development' },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0A12] text-white overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


