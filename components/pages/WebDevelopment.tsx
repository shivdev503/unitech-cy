'use client';

import { motion } from 'motion/react';
import { Globe, Code, Smartphone, Search, ShoppingCart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface WebDevelopmentProps {
  onOpenModal: () => void;
}

export default function WebDevelopment({ onOpenModal }: WebDevelopmentProps) {
  const services = [
    {
      icon: Globe,
      title: 'Corporate Websites',
      description: 'Professional business websites that establish your brand presence online.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with payment integration and inventory management.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first websites that look perfect on all devices and screen sizes.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Search engine optimized websites to improve your online visibility.',
    },
    {
      icon: Code,
      title: 'Custom Web Apps',
      description: 'Tailored web applications built to your exact specifications.',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Lightning-fast websites optimized for speed and user experience.',
    },
  ];

  const portfolio = [
    {
      title: 'Corporate Website',
      category: 'Business',
      tech: 'React, TailwindCSS',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Online Store',
      tech: 'Next.js, Stripe',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web App',
      tech: 'React, Node.js',
    },
  ];

  const technologies = [
    'React & Next.js',
    'Vue & Nuxt',
    'Node.js & Express',
    'WordPress & CMS',
    'TailwindCSS',
    'TypeScript',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjMxODIxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Web Development"
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
              <span className="text-[#00E0FF]">Web Development</span>
            </motion.div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-[#00E0FF] to-white bg-clip-text text-transparent max-w-4xl mx-auto">
              Modern Web Development & Design Solutions
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12 text-white/70 max-w-3xl mx-auto text-lg"
            >
              Create stunning, responsive, and SEO-optimized websites that drive results for your business.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-lg shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Start Your Project
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
              Web Development Services
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

      {/* Portfolio */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore some of our recent web development projects and solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00E0FF]/50 transition-all"
              >
                <div className="relative h-64 bg-gradient-to-br from-[#7B2EFF]/20 to-[#00E0FF]/20 flex items-center justify-center">
                  <Code className="w-20 h-20 text-white/30" />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 mb-3 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 border border-[#7B2EFF]/30 rounded-full text-[#00E0FF] text-sm">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-white">{project.title}</h3>
                  <p className="text-white/60 text-sm">{project.tech}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Technologies We Use
              </h2>
              <p className="text-white/70 mb-8">
                We leverage the latest web technologies and frameworks to build modern, scalable, and performant websites.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl"
                  >
                    <CheckCircle className="w-5 h-5 text-[#00E0FF] flex-shrink-0" />
                    <span className="text-white/80">{tech}</span>
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
                  src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjMxODIxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Web Development Process"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Our Development Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Discovery', desc: 'Understand your goals and requirements' },
              { title: 'Design', desc: 'Create stunning UI/UX designs' },
              { title: 'Develop', desc: 'Build with modern technologies' },
              { title: 'Launch', desc: 'Deploy and optimize for success' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full">
                  <span className="text-white">{index + 1}</span>
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
              Ready to Build Your Website?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's create a stunning online presence that drives growth for your business.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-10 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-2xl shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
