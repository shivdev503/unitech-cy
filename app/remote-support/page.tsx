import type { Metadata } from "next";
import RemoteSupportClient from "@/components/pages/RemoteSupportClient";

export const metadata: Metadata = {
  title: "Remote IT Support & Managed Services (Gurgaon, Delhi, Noida)",
  description: "24/7 remote IT support, ticketing, remote troubleshooting and managed services to keep your business systems running smoothly across Gurgaon, Delhi & Noida.",
  keywords: "remote it support gurgaon, managed it support delhi, remote troubleshooting noida, it helpdesk ncr, 24/7 it support gurugram",
  alternates: { canonical: "https://www.unitechcyber.com/remote-support" },
  openGraph: {
    type: "website",
    url: "https://www.unitechcyber.com/remote-support",
    title: "Remote IT Support & Managed Services (Gurgaon, Delhi, Noida)",
    description: "24/7 remote IT support, ticketing, remote troubleshooting and managed services to keep your business systems running smoothly across Gurgaon, Delhi & Noida.",
    siteName: "UNITECHCYBER",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote IT Support & Managed Services (Gurgaon, Delhi, Noida)",
    description: "24/7 remote IT support, ticketing, remote troubleshooting and managed services to keep your business systems running smoothly across Gurgaon, Delhi & Noida.",
  },
};

export default function RemoteSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What is included in remote support?", acceptedAnswer: { "@type": "Answer", text: "Remote troubleshooting, software fixes, patching, account support and escalation to onsite services if required." } },
              { "@type": "Question", name: "Do you provide 24/7 support?", acceptedAnswer: { "@type": "Answer", text: "Yes — we offer 24/7 support plans and SLA-backed managed services for businesses." } },
              { "@type": "Question", name: "How do I get remote help?", acceptedAnswer: { "@type": "Answer", text: "Open a ticket from our site or call; we support AnyDesk/TeamViewer for remote sessions." } },
              { "@type": "Question", name: "Can you support enterprise environments?", acceptedAnswer: { "@type": "Answer", text: "Yes, we support multi-site enterprise environments with centralized ticketing and monitoring." } },
              { "@type": "Question", name: "What SLAs do you offer?", acceptedAnswer: { "@type": "Answer", text: "We offer tiered SLAs including response times from 30 minutes to 4 hours depending on the plan." } },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.unitechcyber.com" },
              { "@type": "ListItem", position: 2, name: "Remote IT Support", item: "https://www.unitechcyber.com/remote-support" },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Remote IT Support",
            description: "24/7 remote troubleshooting, helpdesk and managed IT services with fast SLAs and escalation to onsite support when necessary.",
            provider: { "@type": "LocalBusiness", name: "UNITECHCYBER", url: "https://www.unitechcyber.com", telephone: "+919759654902" },
            areaServed: [{ "@type": "Place", name: "Gurgaon" }, { "@type": "Place", name: "Delhi" }, { "@type": "Place", name: "Noida" }],
            serviceType: "Remote IT Support & Managed Services",
          }),
        }}
      />

      <RemoteSupportClient />
    </>
  );
}

