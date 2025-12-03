
import type { Metadata } from "next";
import SoftwareSolutionsClient from "@/components/pages/SoftwareSolutionsClient";

export const metadata: Metadata = {
  title: "Software Installation & Licensing Services (Gurgaon, Delhi, Noida)",
  description: "Complete software deployment, licensing management, and corporate application setup. OS installation, antivirus, cloud solutions & database management across NCR region.",
  keywords: "software installation gurgaon, software licensing delhi, os deployment noida, antivirus installation ncr, cloud software solutions gurugram, database management delhi",
  alternates: {
    canonical: "https://www.unitechcyber.com/software-solutions",
  },
  openGraph: {
    type: "website",
    url: "https://www.unitechcyber.com/software-solutions",
    title: "Software Installation & Licensing Services (Gurgaon, Delhi, Noida)",
    description: "Complete software deployment, licensing management, and corporate application setup. OS installation, antivirus, cloud solutions & database management across NCR region.",
    siteName: "UNITECHCYBER",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Installation & Licensing Services (Gurgaon, Delhi, Noida)",
    description: "Complete software deployment, licensing management, and corporate application setup. OS installation, antivirus, cloud solutions & database management across NCR region.",
  },
};

export default function SoftwareSolutionsPage() {
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
                "name": "What software do you install and support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We install and support operating systems, productivity suites, antivirus solutions, cloud platforms, databases, and enterprise applications."
                }
              },
              {
                "@type": "Question",
                "name": "Do you help with software licensing and compliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we manage software licenses, ensure compliance with Microsoft, Adobe, and other vendors, and help optimize your licensing costs."
                }
              },
              {
                "@type": "Question",
                "name": "Can you migrate software from old systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We handle software migration, data transfer, and configuration to minimize downtime and data loss during system upgrades."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide ongoing software support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer 24/7 remote support for software issues, updates, patches, and troubleshooting."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle security software like antivirus?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We deploy enterprise-grade antivirus and security software with automatic updates, real-time monitoring, and threat reporting."
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
                "name": "Software Installation & Licensing",
                "item": "https://www.unitechcyber.com/software-solutions"
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
            "name": "Software Installation & Licensing",
            "description": "Complete software deployment, licensing management, and corporate application setup services.",
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
            "serviceType": "Software Installation & Licensing Management"
          })
        }}
      />

      <SoftwareSolutionsClient />
    </>
  );
}

