import type { Metadata } from "next";
import CybersecurityClient from "@/components/pages/CybersecurityClient";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions & Security Audits (Gurgaon, Delhi, Noida)",
  description: "Security audits, vulnerability assessments, endpoint protection, SIEM, and compliance services to protect your business from cyber threats. Local coverage in Gurgaon, Delhi & Noida.",
  keywords: "cybersecurity gurugram, security audit delhi, vulnerability assessment noida, endpoint protection ncr, siem services gurgaon",
  alternates: { canonical: "https://www.unitechcyber.com/cybersecurity" },
  openGraph: {
    type: "website",
    url: "https://www.unitechcyber.com/cybersecurity",
    title: "Cybersecurity Solutions & Security Audits (Gurgaon, Delhi, Noida)",
    description: "Security audits, vulnerability assessments, endpoint protection, SIEM, and compliance services to protect your business from cyber threats. Local coverage in Gurgaon, Delhi & Noida.",
    siteName: "UNITECHCYBER",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Solutions & Security Audits (Gurgaon, Delhi, Noida)",
    description: "Security audits, vulnerability assessments, endpoint protection, SIEM, and compliance services to protect your business from cyber threats. Local coverage in Gurgaon, Delhi & Noida.",
  },
};

export default function CybersecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What does your security audit include?", acceptedAnswer: { "@type": "Answer", text: "Penetration testing, vulnerability scanning, configuration review and remediation recommendations." } },
              { "@type": "Question", name: "Do you provide managed detection & response?", acceptedAnswer: { "@type": "Answer", text: "We offer MDR services including 24/7 monitoring, alert triage and incident response." } },
              { "@type": "Question", name: "Can you help with compliance?", acceptedAnswer: { "@type": "Answer", text: "Yes — we assist with ISO 27001 readiness, GDPR basics and general IT security compliance." } },
              { "@type": "Question", name: "How do you protect endpoints?", acceptedAnswer: { "@type": "Answer", text: "We deploy enterprise endpoint protection with policy management, EDR and automatic remediation." } },
              { "@type": "Question", name: "What is your incident response process?", acceptedAnswer: { "@type": "Answer", text: "We follow a triage → containment → eradication → recovery workflow and provide a post-incident report." } },
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
              { "@type": "ListItem", position: 2, name: "Cybersecurity Solutions", item: "https://www.unitechcyber.com/cybersecurity" },
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
            name: "Cybersecurity Solutions",
            description: "Security audits, vulnerability assessments, endpoint protection, SIEM and incident response services.",
            provider: { "@type": "LocalBusiness", name: "UNITECHCYBER", url: "https://www.unitechcyber.com", telephone: "+919759654902" },
            areaServed: [{ "@type": "Place", name: "Gurgaon" }, { "@type": "Place", name: "Delhi" }, { "@type": "Place", name: "Noida" }],
            serviceType: "Cybersecurity & Security Audits",
          }),
        }}
      />

      <CybersecurityClient />
    </>
  );
}

