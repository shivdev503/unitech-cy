'use client';

import { motion } from 'motion/react';
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CybersecurityProps {
  onOpenModal: () => void;
}

export default function Cybersecurity({ onOpenModal }: CybersecurityProps) {
  const services = [
    {
      icon: Shield,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and risks.',
    },
    {
      icon: Eye,
      title: 'Threat Monitoring',
      description: '24/7 threat detection and real-time monitoring of your network.',
    },
    {
      icon: Lock,
      title: 'Endpoint Protection',
      description: 'Advanced security solutions for all devices and endpoints.',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response to security breaches and cyber incidents.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Management',
      description: 'Ensure compliance with industry regulations and standards.',
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Employee awareness programs and security best practices training.',
    },
  ];

  const threats = [
    'Ransomware Attacks',
    'Phishing & Social Engineering',
    'Data Breaches',
    'Malware & Viruses',
    'DDoS Attacks',
    'Insider Threats',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjU4MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cybersecurity"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A12]/50 via-[#0A0A12]/80 to-[#0A0A12]" />
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2EFF] rounded-full blur-[150px] animate-pulse" />
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
              <span className="text-[#00E0FF]">Cybersecurity</span>
            </motion.div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-[#00E0FF] to-white bg-clip-text text-transparent max-w-4xl mx-auto">
              Advanced Cybersecurity Solutions to Protect Your Business
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12 text-white/70 max-w-3xl mx-auto text-lg"
            >
              Comprehensive security services to safeguard your critical data and infrastructure from evolving cyber threats.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-lg shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Secure Your Business
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
              Comprehensive Security Services
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

      {/* Threats We Protect Against */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Threats We Protect Against
              </h2>
              <p className="text-white/70 mb-8">
                Our security solutions defend against the full spectrum of modern cyber threats, keeping your business safe and operational.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {threats.map((threat, index) => (
                  <motion.div
                    key={threat}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl"
                  >
                    <Shield className="w-5 h-5 text-[#00E0FF] flex-shrink-0" />
                    <span className="text-white/80">{threat}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjU4MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cybersecurity Protection"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 p-6 bg-[#0A0A12]/90 backdrop-blur-xl border border-[#7B2EFF]/50 rounded-2xl shadow-2xl shadow-[#7B2EFF]/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white mb-1">99.9% Protection Rate</div>
                    <p className="text-white/60 text-sm">Against Known Threats</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Our Security Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Assess', desc: 'Identify vulnerabilities and risks', icon: Eye },
              { title: 'Protect', desc: 'Implement security measures', icon: Shield },
              { title: 'Monitor', desc: 'Continuous threat surveillance', icon: AlertTriangle },
              { title: 'Respond', desc: 'Swift incident resolution', icon: Lock },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center hover:border-[#00E0FF]/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
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
              Don't Wait for a Breach
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Protect your business with our advanced cybersecurity solutions today.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-10 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-2xl shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Get Security Audit
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
