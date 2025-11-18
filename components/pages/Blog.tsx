'use client';

import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cybersecurity', 'Hardware', 'Networking', 'Web Development', 'IT Tips'];

  const blogPosts = [
    {
      title: '10 Essential Cybersecurity Practices for Small Businesses',
      excerpt: 'Learn how to protect your business from cyber threats with these proven security strategies and best practices.',
      category: 'Cybersecurity',
      author: 'John Smith',
      date: 'Nov 10, 2025',
      image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjU4MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'How to Choose the Right Network Infrastructure for Your Business',
      excerpt: 'A comprehensive guide to selecting and implementing the perfect network setup for optimal business performance.',
      category: 'Networking',
      author: 'Sarah Johnson',
      date: 'Nov 8, 2025',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGVzJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjMxODE5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Discover the latest web development trends and technologies shaping the digital landscape this year.',
      category: 'Web Development',
      author: 'Mike Chen',
      date: 'Nov 5, 2025',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjMxODIxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Common Hardware Issues and How to Prevent Them',
      excerpt: 'Expert tips on maintaining your IT hardware and preventing common failures that can disrupt your business.',
      category: 'Hardware',
      author: 'Emily Davis',
      date: 'Nov 3, 2025',
      image: 'https://images.unsplash.com/photo-1729964079476-595fd4f7d627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwc2VydmVyfGVufDF8fHx8MTc2MzI1ODM0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Understanding Ransomware: Protection and Recovery',
      excerpt: 'Everything you need to know about ransomware attacks and how to protect your organization from this growing threat.',
      category: 'Cybersecurity',
      author: 'David Brown',
      date: 'Nov 1, 2025',
      image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjU4MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: '5 Signs Your Business Needs IT Infrastructure Upgrade',
      excerpt: 'Recognize the warning signs that indicate it\'s time to upgrade your business IT infrastructure for better performance.',
      category: 'IT Tips',
      author: 'Lisa Anderson',
      date: 'Oct 29, 2025',
      image: 'https://images.unsplash.com/photo-1729964079476-595fd4f7d627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwc2VydmVyfGVufDF8fHx8MTc2MzI1ODM0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const faq = [
    {
      question: 'How often should I update my IT security?',
      answer: 'Security updates should be applied as soon as they\'re available. We recommend automated updates for critical systems and monthly reviews of your overall security posture.',
    },
    {
      question: 'What is the average lifespan of business hardware?',
      answer: 'Most business computers last 3-5 years, servers 5-7 years, and network equipment 5-10 years depending on usage and maintenance. Regular maintenance can extend these lifespans.',
    },
    {
      question: 'How can I improve my network performance?',
      answer: 'Network performance can be improved through proper bandwidth allocation, regular equipment updates, QoS configuration, and addressing bottlenecks in your infrastructure.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0A0A12]" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2EFF] rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00E0FF] rounded-full blur-[150px] animate-pulse delay-700" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 bg-gradient-to-r from-white via-[#00E0FF] to-white bg-clip-text text-transparent">
              IT Insights & Updates
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Stay informed with the latest trends, tips, and best practices in IT, cybersecurity, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] shadow-lg shadow-[#7B2EFF]/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00E0FF]/50 transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-[#0A0A12]/50 to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#7B2EFF]/90 to-[#00E0FF]/90 backdrop-blur-sm rounded-full text-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="mb-3 text-white group-hover:text-[#00E0FF] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 mb-4">{post.excerpt}</p>

                  <div className="flex items-center gap-2 text-[#00E0FF] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Quick answers to common IT and technology questions.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <motion.details
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-[#00E0FF]/50 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-white">{item.question}</h4>
                  <ChevronDown className="w-5 h-5 text-[#00E0FF] group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-white/60 leading-relaxed">{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 backdrop-blur-xl border border-[#7B2EFF]/50 rounded-3xl text-center overflow-hidden"
          >
            <h2 className="mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest IT insights, security tips, and technology updates delivered to your inbox.
            </p>

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
          </motion.div>
        </div>
      </section>
    </div>
  );
}


