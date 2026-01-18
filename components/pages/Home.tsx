'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Server,
  Package,
  Network,
  Shield,
  Headphones,
  Globe,
  Clock,
  Award,
  Zap,
  Lock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import FooterContent from '../FooterContent';
import InitialAvatar from '../InitialAvataar';

interface HomeProps {
  onOpenModal: () => void;
}

export default function Home({ onOpenModal }: HomeProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Globe,
      title: 'Website & App Development',
      description: 'Modern, responsive, SEO-optimized websites and web applications tailored to your business needs.',
      link: '/web-development',
      color: 'from-blue-600 to-purple-600',
    },
    {
      icon: Server,
      title: 'IT Hardware Maintenance',
      description: 'Professional repair and maintenance for all your IT equipment including laptops, desktops, servers, and peripherals.',
      link: '/it-hardware',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Package,
      title: 'Software Installation & Licensing',
      description: 'Complete software deployment, licensing management, and corporate application setup solutions.',
      link: '/software-solutions',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Network,
      title: 'Network Setup & Security',
      description: 'Enterprise-grade network infrastructure design, implementation, and security configuration.',
      link: '/network-setup',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Advanced threat protection, security audits, and compliance solutions to safeguard your business.',
      link: '/cybersecurity',
      color: 'from-purple-600 to-pink-500',
    },
    {
      icon: Headphones,
      title: 'Remote IT Support',
      description: '24/7 remote technical assistance with fast response times for all your IT challenges.',
      link: '/remote-support',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: '24×7 Technical Support',
      description: 'Round-the-clock availability to ensure your business never stops.',
    },
    {
      icon: Award,
      title: 'Certified & Experienced',
      description: 'Team of certified professionals with years of industry expertise.',
    },
    {
      icon: Zap,
      title: 'Fast Response Time',
      description: 'Quick turnaround on all support requests and service calls.',
    },
    {
      icon: Lock,
      title: 'Cyber-Safe Infrastructure',
      description: 'Security-first approach to protect your critical data and systems.',
    },
  ];

  const testimonials = [
    {
      name: 'Praveen Rao',
      role: 'Founder, NamoHomes',
      content: 'We got our website and mobile app developed from UNITECHCYBER. The UI/UX, speed, and support are exceptional. Highly recommended!',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Rohan Mehta',
      role: 'CTO, Bharat Logistics Pvt Ltd',
      content: 'Their IT hardware maintenance and AMC support helped reduce device downtime by 45%. Team response time is excellent!',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=18',
    },
    {
      name: 'Aditi Sharma',
      role: 'CEO, UrbanStart Technologies',
      content: 'UNITECHCYBER handled our software installation & licensing end-to-end. Reliable and highly professional service!',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
    {
      name: 'Kunal Singh',
      role: 'IT Manager, CoworkHub India',
      content: 'Their network setup & security deployment strengthened our internal infrastructure. Smooth execution and great documentation.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=25',
    },
    {
      name: 'Sana Rizvi',
      role: 'Founder, BrandNest Marketing',
      content: 'UNITECHCYBER transformed our IT infrastructure and improved our data security. Their cybersecurity and proactive support are top class.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    {
      name: 'Arnav Kapoor',
      role: 'Operations Head, FinServe India',
      content: 'Their remote IT support saved us multiple times during urgent breakdowns. Quick resolution and skilled technicians!',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=41',
    },
  ];


  const caseStudies = [
    {
      title: 'Enterprise Network Transformation',
      category: 'Network Infrastructure',
      description: 'Complete network overhaul for a 500+ employee organization with zero-trust architecture.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGVzJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjMxODE5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Cybersecurity Audit & Implementation',
      category: 'Security Solutions',
      description: 'Comprehensive security assessment and remediation for financial services firm.',
      image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjU4MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Modern E-Commerce Platform',
      category: 'Web Development',
      description: 'Built scalable, high-performance online store with integrated payment solutions.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjMxODIxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MzE2ODU5NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Futuristic Technology"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A12]/50 via-[#0A0A12]/80 to-[#0A0A12]" />
        </div>

        {/* Animated Circuit Patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#7B2EFF] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00E0FF] rounded-full blur-[150px] animate-pulse delay-700" />
        </div>

        {/* Content */}
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
              <span className="text-[#00E0FF]">🚀 Future-Ready IT Solutions</span>
            </motion.div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-[#00E0FF] to-white bg-clip-text text-transparent max-w-5xl mx-auto leading-tight">
              Modern IT Hardware & Software Solutions for Future-Ready Businesses
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12 text-white/70 max-w-3xl mx-auto text-lg"
            >
              Secure • Support • Simplify — End-to-end IT Services, Network Infrastructure & Web Solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenModal}
                className="px-8 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-lg shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#00E0FF]/50 transition-all"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/40"
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[#00E0FF] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 border border-[#7B2EFF]/30 rounded-full text-[#00E0FF]">
              Our Services
            </span>
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Complete IT Solutions Portfolio
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From hardware maintenance to cutting-edge cybersecurity, we provide comprehensive IT services tailored to your business needs.
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
              >
                <Link href={service.link}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-[#00E0FF]/50 transition-all overflow-hidden"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7B2EFF]/0 to-[#00E0FF]/0 group-hover:from-[#7B2EFF]/10 group-hover:to-[#00E0FF]/10 transition-all" />

                    {/* Icon */}
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r ${service.color} rounded-2xl shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="relative mb-3 text-white group-hover:text-[#00E0FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="relative text-white/60 mb-4">
                      {service.description}
                    </p>

                    <div className="relative flex items-center gap-2 text-[#00E0FF] opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7B2EFF]/20 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 border border-[#7B2EFF]/30 rounded-full text-[#00E0FF]">
                Who We Are
              </span>
              <h2 className="mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Your Trusted IT Partner for Digital Transformation
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                UNITECHCYBER is a leading provider of comprehensive IT solutions, specializing in hardware services,
                cybersecurity, network infrastructure, and web development. With years of experience and a team of
                certified professionals, we help businesses navigate the complexities of modern technology.
              </p>
              <p className="text-white/70 mb-8 leading-relaxed">
                Our mission is to empower organizations with reliable, secure, and scalable IT infrastructure that
                drives growth and innovation. We pride ourselves on delivering excellence through proactive support,
                cutting-edge solutions, and unwavering commitment to client success.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="mb-2 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] bg-clip-text text-transparent">
                    500+
                  </div>
                  <p className="text-white/60">Projects Completed</p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="mb-2 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] bg-clip-text text-transparent">
                    98%
                  </div>
                  <p className="text-white/60">Client Satisfaction</p>
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
                  src="https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMTg2OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team Meeting"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 p-6 bg-[#0A0A12]/90 backdrop-blur-xl border border-[#7B2EFF]/50 rounded-2xl shadow-2xl shadow-[#7B2EFF]/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white mb-1">Certified & Secure</div>
                    <p className="text-white/60 text-sm">ISO 27001 Compliant</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 border border-[#7B2EFF]/30 rounded-full text-[#00E0FF]">
              Why Choose Us
            </span>
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Excellence in Every Aspect
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-2xl blur-xl opacity-50" />
                  <div className="relative w-full h-full bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-2xl flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-white">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 border border-[#7B2EFF]/30 rounded-full text-[#00E0FF]">
              Portfolio
            </span>
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Success Stories & Case Studies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00E0FF]/50 transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-[#0A0A12]/50 to-transparent" />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 mb-3 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 border border-[#7B2EFF]/30 rounded-full text-[#00E0FF] text-sm">
                    {study.category}
                  </span>
                  <h3 className="mb-2 text-white">{study.title}</h3>
                  <p className="text-white/60">{study.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 border border-[#7B2EFF]/30 rounded-full text-[#00E0FF]">
              Testimonials
            </span>
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  {/* <ImageWithFallback
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-2 border-[#00E0FF]/50"
                  /> */}
                  <InitialAvatar
                    name={testimonials[currentTestimonial].name}
                  />
                  <div>
                    <h4 className="text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-white/60">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00E0FF] text-[#00E0FF]" />
                  ))}
                </div>

                <p className="text-white/80 text-lg leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#00E0FF]/50 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${index === currentTestimonial
                        ? 'w-8 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF]'
                        : 'bg-white/20'
                        }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#00E0FF]/50 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 backdrop-blur-xl border border-[#7B2EFF]/50 rounded-3xl text-center overflow-hidden"
          >
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#7B2EFF] to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent" />

            <h2 className="mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Need Reliable IT Support?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Get Your Systems Future-Ready with our comprehensive IT solutions and expert support.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="px-10 py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full shadow-2xl shadow-[#7B2EFF]/50 hover:shadow-[#7B2EFF]/70 transition-all flex items-center gap-2 mx-auto"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
          <FooterContent />
        </div>
      </section>
    </div>
  );
}


