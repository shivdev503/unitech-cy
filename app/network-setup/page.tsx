import type { Metadata } from "next";
import NetworkSetupClient from "@/components/pages/NetworkSetupClient";

export const metadata: Metadata = {
  title: "Network Setup & Security Services (Gurgaon, Delhi, Noida)",
  description: "Design, implement and secure enterprise network infrastructure — LAN, WiFi, routers, switches, firewalls and VPNs. Onsite & remote services across Gurgaon, Delhi & Noida.",
  keywords: "network setup gurgaon, network security delhi, wifi installation noida, firewall configuration gurugram, vpn setup ncr",
  alternates: { canonical: "https://www.unitechcyber.com/network-setup" },
  openGraph: {
    type: "website",
    url: "https://www.unitechcyber.com/network-setup",
    title: "Network Setup & Security Services (Gurgaon, Delhi, Noida)",
    description: "Design, implement and secure enterprise network infrastructure — LAN, WiFi, routers, switches, firewalls and VPNs. Onsite & remote services across Gurgaon, Delhi & Noida.",
    siteName: "UNITECHCYBER",
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Setup & Security Services (Gurgaon, Delhi, Noida)",
    description: "Design, implement and secure enterprise network infrastructure — LAN, WiFi, routers, switches, firewalls and VPNs. Onsite & remote services across Gurgaon, Delhi & Noida.",
  },
};

export default function NetworkSetupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you design corporate networks?",
                acceptedAnswer: { "@type": "Answer", text: "Yes — we design scalable LAN/WAN architectures for offices and data centers tailored to performance and security needs." },
              },
              {
                "@type": "Question",
                name: "Can you secure our WiFi and remote access?",
                acceptedAnswer: { "@type": "Answer", text: "We implement secure WiFi with guest segmentation, WPA3, and VPNs for secure remote access and management." },
              },
              {
                "@type": "Question",
                name: "Do you provide network monitoring?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, we offer 24/7 network monitoring, alerting and performance optimization services." },
              },
              {
                "@type": "Question",
                name: "What vendors do you work with?",
                acceptedAnswer: { "@type": "Answer", text: "We work with Cisco, Ubiquiti, MikroTik, Fortinet, Palo Alto and other enterprise vendors depending on client needs." },
              },
              {
                "@type": "Question",
                name: "Do you handle wireless site surveys?",
                acceptedAnswer: { "@type": "Answer", text: "Yes — we perform site surveys, capacity planning and AP placements for reliable coverage." },
              },
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
              { "@type": "ListItem", position: 2, name: "Network Setup & Security", item: "https://www.unitechcyber.com/network-setup" },
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
            name: "Network Setup & Security",
            description: "Network design, implementation and security services including routers, switches, firewalls, WiFi and VPN setup.",
            provider: { "@type": "LocalBusiness", name: "UNITECHCYBER", url: "https://www.unitechcyber.com", telephone: "+919759654902" },
            areaServed: [{ "@type": "Place", name: "Gurgaon" }, { "@type": "Place", name: "Delhi" }, { "@type": "Place", name: "Noida" }],
            serviceType: "Network Design & Security",
          }),
        }}
      />

      <NetworkSetupClient />
    </>
  );
}

