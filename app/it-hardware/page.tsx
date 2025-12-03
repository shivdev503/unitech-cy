import type { Metadata } from "next";
import ITHardwareClient from "@/components/pages/ITHardwareClient";

export const metadata: Metadata = {
  title: "IT Hardware Maintenance & Repair Services (Gurgaon, Delhi, Noida)",
  description: "Professional IT hardware repair and maintenance for laptops, desktops, servers, and peripherals. Fast onsite & remote service across Gurgaon, Delhi & Noida. Free diagnosis available.",
  keywords: "it hardware maintenance gurgaon, laptop repair delhi, desktop repair noida, server maintenance ncr, hardware support gurugram, computer repair delhi",
  alternates: {
    canonical: "https://www.unitechcyber.com/it-hardware",
  },
  openGraph: {
    type: "website",
    url: "https://www.unitechcyber.com/it-hardware",
    title: "IT Hardware Maintenance & Repair Services (Gurgaon, Delhi, Noida)",
    description: "Professional IT hardware repair and maintenance for laptops, desktops, servers, and peripherals. Fast onsite & remote service across Gurgaon, Delhi & Noida.",
    siteName: "UNITECHCYBER",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Hardware Maintenance & Repair Services (Gurgaon, Delhi, Noida)",
    description: "Professional IT hardware repair and maintenance for laptops, desktops, servers, and peripherals. Fast onsite & remote service across Gurgaon, Delhi & Noida.",
  },
};

export default function ITHardwarePage() {
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
                "name": "What types of hardware do you repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We repair and maintain all types of IT hardware including laptops, desktops, servers, printers, routers, switches, and networking equipment."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide onsite hardware repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer both onsite and remote hardware support across Gurgaon, Delhi, and Noida with fast response times and minimal downtime."
                }
              },
              {
                "@type": "Question",
                "name": "What is your average hardware repair turnaround time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most hardware repairs are completed within 24-48 hours. For critical systems, we offer emergency same-day support."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer warranty on hardware repairs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all hardware repairs come with a 90-day warranty on parts and labor. Extended warranties are available."
                }
              },
              {
                "@type": "Question",
                "name": "How much does hardware maintenance cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hardware maintenance costs vary based on equipment type and service scope. Contact us for a free assessment and quotation."
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
                "name": "IT Hardware Maintenance",
                "item": "https://www.unitechcyber.com/it-hardware"
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
            "name": "IT Hardware Maintenance & Repair",
            "description": "Professional repair and maintenance services for IT hardware including laptops, desktops, servers, and peripherals.",
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
            "serviceType": "Hardware Repair & Maintenance"
          })
        }}
      />

      <ITHardwareClient />
    </>
  );
}

