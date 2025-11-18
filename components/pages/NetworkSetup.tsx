'use client';

import { motion } from 'motion/react';
import { Network, Wifi, Router, Cable, Shield, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface NetworkSetupProps {
  onOpenModal: () => void;
}

export default function NetworkSetup({ onOpenModal }: NetworkSetupProps) {
  const services = [
    {
      icon: Network,
      title: 'LAN Setup',
      description: 'Complete local area network design, cabling, and infrastructure deployment.',
    },
    {
      icon: Wifi,
      title: 'WiFi Configuration',
      description: 'Wireless network setup with optimal coverage and security configurations.',
    },
    {
      icon: Router,
      title: 'Router & Switches',
      description: 'Enterprise-grade router and switch installation and configuration.',
    },
    {
      icon: Cable,
      title: 'Structured Cabling',
      description: 'Professional network cabling services with proper documentation.',
    },
    {
      icon: Shield,
      title: 'Firewall Setup',
      description: 'Advanced firewall configuration to protect your network infrastructure.',
    },
    {
      icon: Settings,
      title: 'VPN Configuration',
      description: 'Secure remote access VPN setup for your distributed workforce.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGVzJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjMxODE5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Network Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A12]/50 via-[#0A0A12]/80 to-[#0A0A12]" />
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00E0FF] rounded-full blur-[150px] animate-pulse" />
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
              <span className="text-[#00E0FF]">Network Solutions</span>
            </motion.div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-[#00E0FF] to-white bg-clip-text text-transparent max-w-4xl mx-auto">
              Enterprise Network Setup & Security Solutions
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12 text-white/70 max-w-3xl mx-auto text-lg"
            >
              Design, deploy, and secure your network infrastructure with our comprehensive networking services.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-lg shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Plan Your Network
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
              Complete Network Infrastructure Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Network Flow Diagram */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Our Network Implementation Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Assessment', desc: 'Analyze your requirements and current setup' },
              { step: '02', title: 'Design', desc: 'Create optimized network architecture' },
              { step: '03', title: 'Deploy', desc: 'Install and configure all equipment' },
              { step: '04', title: 'Support', desc: 'Ongoing monitoring and maintenance' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full">
                    <span className="text-white">{item.step}</span>
                  </div>
                  <h4 className="text-white mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGVzJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjMxODE5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Network Setup"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Why Professional Network Setup Matters
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Optimal Performance', desc: 'Maximize network speed and reliability' },
                  { title: 'Scalability', desc: 'Built to grow with your business needs' },
                  { title: 'Security First', desc: 'Protected against cyber threats' },
                  { title: 'Reduced Downtime', desc: 'Minimize disruptions to operations' },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#00E0FF]" />
                    </div>
                    <div>
                      <h4 className="text-white mb-2">{benefit.title}</h4>
                      <p className="text-white/60">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
              Ready to Build Your Network?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let us design and implement a robust network infrastructure for your business.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-10 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-2xl shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Start Planning
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
