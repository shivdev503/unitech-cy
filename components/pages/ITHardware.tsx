'use client';

import { motion } from 'motion/react';
import { Monitor, Server, Printer, Wifi, HardDrive, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ITHardwareProps {
  onOpenModal: () => void;
}

export default function ITHardware({ onOpenModal }: ITHardwareProps) {
  const services = [
    {
      icon: Monitor,
      title: 'Laptop & Desktop Repair',
      description: 'Expert diagnosis and repair for all brands including Dell, HP, Lenovo, Apple, and more.',
    },
    {
      icon: Printer,
      title: 'Printer Services',
      description: 'Installation, maintenance, and repair for all types of printers and multifunction devices.',
    },
    {
      icon: Wifi,
      title: 'Router & Networking',
      description: 'Setup, configuration, and troubleshooting for routers, switches, and network equipment.',
    },
    {
      icon: Server,
      title: 'Server Maintenance',
      description: 'Enterprise server management, hardware upgrades, and performance optimization.',
    },
    {
      icon: HardDrive,
      title: 'Data Recovery',
      description: 'Professional data recovery services for failed hard drives and storage devices.',
    },
    {
      icon: Cpu,
      title: 'Hardware Upgrades',
      description: 'RAM, SSD, GPU, and other component upgrades to boost system performance.',
    },
  ];

  const amcPlans = [
    {
      name: 'Basic',
      price: '$199',
      period: 'per device/year',
      features: [
        'Quarterly maintenance visits',
        'Priority phone support',
        'Basic diagnostics',
        'Software troubleshooting',
        'Remote assistance',
      ],
    },
    {
      name: 'Professional',
      price: '$399',
      period: 'per device/year',
      features: [
        'Monthly maintenance visits',
        '24/7 priority support',
        'Advanced diagnostics',
        'Hardware replacements included',
        'Preventive maintenance',
        'Free pickup & delivery',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored solution',
      features: [
        'Dedicated account manager',
        'On-site technician',
        'Unlimited support visits',
        'All repairs included',
        'Asset management',
        'SLA guarantees',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1729964079476-595fd4f7d627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwc2VydmVyfGVufDF8fHx8MTc2MzI1ODM0OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Computer Hardware"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A12]/50 via-[#0A0A12]/80 to-[#0A0A12]" />
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7B2EFF] rounded-full blur-[150px] animate-pulse" />
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
              <span className="text-[#00E0FF]">Hardware Services</span>
            </motion.div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-[#00E0FF] to-white bg-clip-text text-transparent max-w-4xl mx-auto">
              Professional IT Hardware Maintenance & Repair Services
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12 text-white/70 max-w-3xl mx-auto text-lg"
            >
              Expert repair, maintenance, and support for all your IT hardware needs. From laptops to servers, we keep your systems running at peak performance.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-lg shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Request Service
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
              Comprehensive Hardware Solutions
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We service all major brands and provide end-to-end hardware support for businesses of all sizes.
            </p>
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

      {/* AMC Plans */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Annual Maintenance Contract (AMC) Plans
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive maintenance packages to keep your IT infrastructure running smoothly year-round.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {amcPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 bg-white/5 backdrop-blur-xl border rounded-3xl ${
                  plan.popular
                    ? 'border-[#00E0FF]/50 shadow-2xl shadow-[#00E0FF]/20'
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full text-sm">
                    Most Popular
                  </div>
                )}

                <h3 className="mb-4 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-white/60 text-sm"> {plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00E0FF] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenModal}
                  className={`w-full py-3 rounded-full transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] shadow-lg shadow-[#7B2EFF]/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Why Choose Our Hardware Services?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#00E0FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Certified Technicians</h4>
                    <p className="text-white/60">Our team consists of certified professionals with expertise across all major hardware brands.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#00E0FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Quick Turnaround</h4>
                    <p className="text-white/60">Most repairs completed within 24-48 hours, with express service available.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#00E0FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Genuine Parts</h4>
                    <p className="text-white/60">We use only genuine, manufacturer-approved parts for all replacements and repairs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#00E0FF]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Warranty Protection</h4>
                    <p className="text-white/60">All our repairs come with a comprehensive warranty for your peace of mind.</p>
                  </div>
                </div>
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
                  src="https://images.unsplash.com/photo-1729964079476-595fd4f7d627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwc2VydmVyfGVufDF8fHx8MTc2MzI1ODM0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hardware Service"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent" />
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
              Ready to Get Your Hardware Fixed?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for fast, reliable hardware repair and maintenance services.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-10 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-2xl shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Request Service Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
