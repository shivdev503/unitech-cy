'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'IT Hardware Maintenance',
    'Software Installation & Licensing',
    'Network Setup & Security',
    'Cybersecurity Solutions',
    'Remote IT Support',
    'Website Development',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-2xl bg-[#0A0A12]/90 backdrop-blur-xl border-0 sm:border border-[#7B2EFF]/50 rounded-none sm:rounded-3xl overflow-y-auto shadow-2xl shadow-[#7B2EFF]/20 my-auto scrollbar-thin"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2EFF] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
            >
              <X className="w-5 h-5 sm:w-5 sm:h-5" />
            </button>

            <div className="p-4 sm:p-6 md:p-8">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-4 sm:mb-6 md:mb-8 pt-2 sm:pt-0">
                    <h2 className="mb-2 text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] bg-clip-text text-transparent">
                      Get Free Consultation
                    </h2>
                    <p className="text-sm sm:text-base text-white/60 px-2">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm sm:text-base text-white/80 mb-1.5 sm:mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#00E0FF]/50 text-white placeholder:text-white/40 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm sm:text-base text-white/80 mb-1.5 sm:mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#00E0FF]/50 text-white placeholder:text-white/40 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm sm:text-base text-white/80 mb-1.5 sm:mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#00E0FF]/50 text-white placeholder:text-white/40 transition-all"
                          placeholder="+91 9759654902"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm sm:text-base text-white/80 mb-1.5 sm:mb-2">
                          Select Service *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#00E0FF]/50 text-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0A0A12]">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-[#0A0A12]">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm sm:text-base text-white/80 mb-1.5 sm:mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#00E0FF]/50 text-white placeholder:text-white/40 transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#7B2EFF]/50 transition-all font-medium"
                    >
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Submit Enquiry
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-8 sm:py-10 md:py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 rounded-full mb-4 sm:mb-6"
                  >
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#00E0FF]" />
                  </motion.div>
                  <h3 className="mb-2 text-lg sm:text-xl md:text-2xl text-white">Thank You!</h3>
                  <p className="text-sm sm:text-base text-white/60 px-2">
                    Your enquiry has been submitted successfully. We'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


