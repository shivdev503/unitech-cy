'use client';

import { motion } from 'motion/react';
import { Package, Shield, Cloud, Database, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SoftwareSolutionsProps {
  onOpenModal: () => void;
}

export default function SoftwareSolutions({ onOpenModal }: SoftwareSolutionsProps) {
  const services = [
    {
      icon: Package,
      title: 'Windows Installation',
      description: 'Professional installation and configuration of Windows OS for desktops and laptops.',
    },
    {
      icon: Shield,
      title: 'Antivirus & Security',
      description: 'Enterprise-grade antivirus solutions, firewall setup, and security software deployment.',
    },
    {
      icon: Cloud,
      title: 'Cloud Software',
      description: 'Microsoft 365, Google Workspace, and other cloud productivity suite setup.',
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'SQL Server, MySQL, PostgreSQL installation and configuration services.',
    },
  ];

  const licenses = [
    'Microsoft Windows Pro/Enterprise',
    'Microsoft Office 365',
    'Adobe Creative Cloud',
    'Antivirus (Kaspersky, Norton, McAfee)',
    'AutoCAD & Engineering Software',
    'QuickBooks & Accounting Software',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0A0A12]" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7B2EFF] rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00E0FF] rounded-full blur-[150px] animate-pulse delay-700" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 border border-[#7B2EFF]/30 rounded-full"
            >
              <span className="text-[#00E0FF]">Software Solutions</span>
            </motion.div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-[#00E0FF] to-white bg-clip-text text-transparent max-w-4xl mx-auto">
              Software Installation & Licensing Management
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12 text-white/70 max-w-3xl mx-auto text-lg"
            >
              Complete software deployment, licensing procurement, and corporate application setup solutions for businesses.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-lg shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Get Quote
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Our Software Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-[#00E0FF]/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-2xl">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 text-white">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Software Licensing Solutions
              </h2>
              <p className="text-white/70 mb-8">
                We provide genuine software licenses for all major platforms and applications. Stay compliant and secure with our licensing management services.
              </p>

              <div className="space-y-4">
                {licenses.map((license, index) => (
                  <motion.div
                    key={license}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00E0FF] flex-shrink-0" />
                    <span className="text-white/80">{license}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: 'Licenses Deployed', value: '5000+' },
                { label: 'Software Vendors', value: '50+' },
                { label: 'Response Time', value: '< 2hrs' },
                { label: 'Client Satisfaction', value: '99%' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center"
                >
                  <div className="mb-2 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 backdrop-blur-xl border border-[#7B2EFF]/50 rounded-3xl text-center overflow-hidden"
          >
            <h2 className="mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Need Software Solutions?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for software installation, licensing, and deployment services.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-10 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-2xl shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
