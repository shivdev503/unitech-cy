import type { Metadata } from "next";
import WebDevelopmentClient from "@/components/pages/WebDevelopmentClient";
export const metadata: Metadata = {
  title: "Custom Web & App Development Services (Gurgaon, Delhi, Noida)",
  description: "Modern, responsive, SEO-optimized web & app development tailored to your business. Custom solutions for e-commerce, SaaS, and enterprise applications across NCR.",
  keywords: "web development gurgaon, app development delhi, custom web apps noida, e-commerce development ncr, seo-friendly websites gurugram, mobile app development delhi",
  alternates: {
    canonical: "https://www.unitechcyber.com/web-development",
  },
  openGraph: {
    type: "website",
    url: "https://www.unitechcyber.com/web-development",
    title: "Custom Web & App Development Services (Gurgaon, Delhi, Noida)",
    description: "Modern, responsive, SEO-optimized web & app development tailored to your business. Custom solutions for e-commerce, SaaS, and enterprise applications across NCR.",
    siteName: "UNITECHCYBER",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web & App Development Services (Gurgaon, Delhi, Noida)",
    description: "Modern, responsive, SEO-optimized web & app development tailored to your business. Custom solutions for e-commerce, SaaS, and enterprise applications across NCR.",
  },
};

export default function WebDevelopmentPage() {
  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What type of web and app solutions do you build?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We build custom websites, e-commerce platforms, SaaS applications, mobile apps, and enterprise solutions using modern tech stacks."
                }
              },
              {
                "@type": "Question",
                "name": "Are your websites SEO-optimized?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our websites are built with SEO best practices including responsive design, fast loading, clean code, and metadata optimization."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide ongoing support and maintenance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We offer post-launch support, bug fixes, feature updates, security patches, and performance monitoring."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a web or app project typically take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project timelines vary based on complexity. Simple websites take 4-6 weeks, while complex apps may take 3-6 months. We provide detailed timelines after discovery."
                }
              },
              {
                "@type": "Question",
                "name": "What technologies do you use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use modern tech stacks including Next.js, React, Node.js, Python, cloud platforms (AWS, GCP), and databases like PostgreSQL and MongoDB."
                }
              }
            ]
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.unitechcyber.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Web & App Development",
                "item": "https://www.unitechcyber.com/web-development"
              }
            ]
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web & App Development",
            "description": "Custom web and mobile app development with modern technologies, SEO optimization, and ongoing support.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "UNITECHCYBER",
              "url": "https://www.unitechcyber.com",
              "telephone": "+919759654902"
            },
            "areaServed": [
              { "@type": "Place", "name": "Gurgaon" },
              { "@type": "Place", "name": "Delhi" },
              { "@type": "Place", "name": "Noida" }
            ],
            "serviceType": "Web & App Development"
          })
        }}
      />

      <WebDevelopmentClient />
    </>
  );
}

