'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      content: 'Sector 48, Gurugram, Haryana, India',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+91 9759654902',
      link: 'tel:+919759654902',
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'unitechcyber1@gmail.com',
      link: 'mailto:unitechcyber1@gmail.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
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
              Get In Touch
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Have a question or need assistance? We're here to help. Contact us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center hover:border-[#00E0FF]/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2 text-white">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-white/60 hover:text-[#00E0FF] transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-white/60">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"
            >
              <h2 className="mb-6 text-white">Send Us a Message</h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#00E0FF]/50 text-white placeholder:text-white/40 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-white/80 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#00E0FF]/50 text-white placeholder:text-white/40 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white/80 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#00E0FF]/50 text-white placeholder:text-white/40 transition-all"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#00E0FF]/50 text-white placeholder:text-white/40 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#7B2EFF]/50 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 rounded-full mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-[#00E0FF]" />
                  </motion.div>
                  <h3 className="mb-2 text-white">Message Sent!</h3>
                  <p className="text-white/60">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-white/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537353153167!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1589520612515!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </motion.div>
          </div>

          {/* Quick Call Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 backdrop-blur-xl border border-[#7B2EFF]/50 rounded-3xl text-center"
          >
            <h3 className="mb-4 text-white">Need Immediate Assistance?</h3>
            <p className="text-white/70 mb-6">
              Call us directly for urgent IT support and technical assistance.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919759654902"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-full"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 9759654902
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


