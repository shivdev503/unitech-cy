'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Download } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-b from-[#0A0A12] to-black border-t border-white/10">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#7B2EFF] to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="bg-gradient-to-r from-[#7B2EFF] via-[#00E0FF] to-[#7B2EFF] bg-clip-text text-transparent">
                UNITECH<span className="opacity-80">CYBER</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6">
              Modern IT Hardware & Cybersecurity Solutions for Future-Ready Businesses.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#7B2EFF]/20 hover:to-[#00E0FF]/20 hover:border-[#00E0FF]/50 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#7B2EFF]/20 hover:to-[#00E0FF]/20 hover:border-[#00E0FF]/50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#7B2EFF]/20 hover:to-[#00E0FF]/20 hover:border-[#00E0FF]/50 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-white/90">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <button onClick={onOpenModal} className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  Get Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-white/90">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/it-hardware" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  IT Hardware Services
                </Link>
              </li>
              <li>
                <Link href="/software-solutions" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/network-setup" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  Network Setup
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/remote-support" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  Remote Support
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-white/90">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00E0FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Sector 48, Gurugram, Haryana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00E0FF] flex-shrink-0" />
                <a href="tel:+919759654902" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  +91 9759654902
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00E0FF] flex-shrink-0" />
                <a href="mailto:unitechcyber1@gmail.com" className="text-white/60 hover:text-[#00E0FF] transition-colors">
                  unitechcyber1@gmail.com
                </a>
              </li>
            </ul>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-gradient-to-r hover:from-[#7B2EFF]/20 hover:to-[#00E0FF]/20 hover:border-[#00E0FF]/50 transition-all"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">Download Brochure</span>
            </motion.a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="mb-4 text-white/90">Subscribe to Our Newsletter</h3>
            <p className="text-white/60 mb-6">Stay updated with the latest IT trends and cybersecurity insights.</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-[#00E0FF]/50 text-white placeholder:text-white/40"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60 mb-6">Trusted Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            <span className="text-white/80">Microsoft</span>
            <span className="text-white/80">Cisco</span>
            <span className="text-white/80">HP</span>
            <span className="text-white/80">Dell</span>
            <span className="text-white/80">Fortinet</span>
            <span className="text-white/80">VMware</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40">
            © {new Date().getFullYear()} UNITECHCYBER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


