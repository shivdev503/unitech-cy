'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const services = [
    { name: 'IT Hardware Services', path: '/it-hardware' },
    { name: 'Software Solutions', path: '/software-solutions' },
    { name: 'Network Setup & Security', path: '/network-setup' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity' },
    { name: 'Remote IT Support', path: '/remote-support' },
    { name: 'Web Development', path: '/web-development' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A12]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10 flex items-center gap-3"
            >
              <div className="relative w-54 h-12 flex-shrink-0">
                <Image
                  src="/cyberlogo5.svg"
                  alt="UNITECHCYBER Logo"
                  width={200}
                  height={60}
                  className="drop-shadow-[0_0_8px_rgba(123,46,255,0.5)]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7B2EFF]/30 to-[#00E0FF]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* <span className="bg-gradient-to-r from-[#7B2EFF] via-[#00E0FF] to-[#7B2EFF] bg-clip-text text-transparent tracking-wider font-semibold text-lg">
                UNITECHCYBER
              </span> */}
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`relative group ${
                pathname === '/' ? 'text-[#00E0FF]' : 'text-white/80 hover:text-white'
              } transition-colors`}
            >
              Home
              {pathname === '/' && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF]"
                />
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-[#0A0A12]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="block px-6 py-3 text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-[#7B2EFF]/20 hover:to-[#00E0FF]/20 transition-all border-b border-white/5 last:border-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className={`relative ${
                pathname === '/blog' ? 'text-[#00E0FF]' : 'text-white/80 hover:text-white'
              } transition-colors`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`relative ${
                pathname === '/contact' ? 'text-[#00E0FF]' : 'text-white/80 hover:text-white'
              } transition-colors`}
            >
              Contact
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="relative px-6 py-2.5 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Enquire Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF] to-[#7B2EFF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#00E0FF] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-[#161827]"
            >
              <nav className="flex flex-col gap-2 py-4">
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-lg ${
                    pathname === '/' ? 'bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 text-[#00E0FF]' : 'text-white/80'
                  }`}
                >
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-white/80"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            className="block px-8 py-2 text-white/70"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/blog"
                  className={`px-4 py-2 rounded-lg ${
                    pathname === '/blog' ? 'bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 text-[#00E0FF]' : 'text-white/80'
                  }`}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className={`px-4 py-2 rounded-lg ${
                    pathname === '/contact' ? 'bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 text-[#00E0FF]' : 'text-white/80'
                  }`}
                >
                  Contact
                </Link>

                <button
                  onClick={onOpenModal}
                  className="mt-2 mx-4 px-6 py-2.5 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full"
                >
                  Enquire Now
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

