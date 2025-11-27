'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const services = [
    'IT Hardware Maintenance',
    'Software Installation & Licensing',
    'Network Setup & Security',
    'Cybersecurity Solutions',
    'Remote IT Support',
    'Website Development',
  ];

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    if (name.trim().length > 50) {
      return 'Name must be less than 50 characters';
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address';
    }
    if (email.trim().length > 100) {
      return 'Email must be less than 100 characters';
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    // Remove spaces, dashes, parentheses, and plus signs for validation
    const cleanedPhone = phone.replace(/[\s\-\(\)\+]/g, '');
    // Allow digits only, 7-15 digits (international format)
    if (!/^\d{7,15}$/.test(cleanedPhone)) {
      return 'Please enter a valid phone number (7-15 digits)';
    }
    return undefined;
  };

  const validateService = (service: string): string | undefined => {
    if (!service.trim()) {
      return 'Please select a service';
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (message.trim().length > 500) {
      return 'Message must be less than 500 characters';
    }
    return undefined;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const errors: FieldErrors = {};
    
    const nameError = validateName(formData.name);
    if (nameError) errors.name = nameError;
    
    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;
    
    const phoneError = validatePhone(formData.phone);
    if (phoneError) errors.phone = phoneError;
    
    const serviceError = validateService(formData.service);
    if (serviceError) errors.service = serviceError;
    
    const messageError = validateMessage(formData.message);
    if (messageError) errors.message = messageError;

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enquiry');
      }

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
        setFieldErrors({});
        setTouched({});
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear general error when user starts typing
    if (error) setError(null);
    
    // Validate field in real-time if it has been touched
    if (touched[name]) {
      let fieldError: string | undefined;
      
      switch (name) {
        case 'name':
          fieldError = validateName(value);
          break;
        case 'email':
          fieldError = validateEmail(value);
          break;
        case 'phone':
          fieldError = validatePhone(value);
          break;
        case 'service':
          fieldError = validateService(value);
          break;
        case 'message':
          fieldError = validateMessage(value);
          break;
      }
      
      setFieldErrors(prev => ({
        ...prev,
        [name]: fieldError,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate the field on blur
    let fieldError: string | undefined;
    
    switch (name) {
      case 'name':
        fieldError = validateName(value);
        break;
      case 'email':
        fieldError = validateEmail(value);
        break;
      case 'phone':
        fieldError = validatePhone(value);
        break;
      case 'service':
        fieldError = validateService(value);
        break;
      case 'message':
        fieldError = validateMessage(value);
        break;
    }
    
    setFieldErrors(prev => ({
      ...prev,
      [name]: fieldError,
    }));
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

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

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
                          onBlur={handleBlur}
                          disabled={isSubmitting}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border rounded-xl sm:rounded-2xl focus:outline-none text-white placeholder:text-white/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                            fieldErrors.name
                              ? 'border-red-500/50 focus:border-red-500/50'
                              : 'border-white/10 focus:border-[#00E0FF]/50'
                          }`}
                          placeholder="John Doe"
                        />
                        {fieldErrors.name && touched.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 text-xs sm:text-sm text-red-400"
                          >
                            {fieldErrors.name}
                          </motion.p>
                        )}
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
                          onBlur={handleBlur}
                          disabled={isSubmitting}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border rounded-xl sm:rounded-2xl focus:outline-none text-white placeholder:text-white/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                            fieldErrors.email
                              ? 'border-red-500/50 focus:border-red-500/50'
                              : 'border-white/10 focus:border-[#00E0FF]/50'
                          }`}
                          placeholder="john@example.com"
                        />
                        {fieldErrors.email && touched.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 text-xs sm:text-sm text-red-400"
                          >
                            {fieldErrors.email}
                          </motion.p>
                        )}
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
                          onBlur={handleBlur}
                          disabled={isSubmitting}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border rounded-xl sm:rounded-2xl focus:outline-none text-white placeholder:text-white/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                            fieldErrors.phone
                              ? 'border-red-500/50 focus:border-red-500/50'
                              : 'border-white/10 focus:border-[#00E0FF]/50'
                          }`}
                          placeholder="+91 9759654902"
                        />
                        {fieldErrors.phone && touched.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 text-xs sm:text-sm text-red-400"
                          >
                            {fieldErrors.phone}
                          </motion.p>
                        )}
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
                          onBlur={handleBlur}
                          disabled={isSubmitting}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border rounded-xl sm:rounded-2xl focus:outline-none text-white transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                            fieldErrors.service
                              ? 'border-red-500/50 focus:border-red-500/50'
                              : 'border-white/10 focus:border-[#00E0FF]/50'
                          }`}
                        >
                          <option value="" className="bg-[#0A0A12]">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-[#0A0A12]">
                              {service}
                            </option>
                          ))}
                        </select>
                        {fieldErrors.service && touched.service && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 text-xs sm:text-sm text-red-400"
                          >
                            {fieldErrors.service}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm sm:text-base text-white/80 mb-1.5 sm:mb-2">
                        Message
                        {formData.message && (
                          <span className="ml-2 text-white/40 text-xs">
                            ({formData.message.length}/500)
                          </span>
                        )}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 border rounded-xl sm:rounded-2xl focus:outline-none text-white placeholder:text-white/40 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                          fieldErrors.message
                            ? 'border-red-500/50 focus:border-red-500/50'
                            : 'border-white/10 focus:border-[#00E0FF]/50'
                        }`}
                        placeholder="Tell us about your requirements..."
                        maxLength={500}
                      />
                      {fieldErrors.message && touched.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1.5 text-xs sm:text-sm text-red-400"
                        >
                          {fieldErrors.message}
                        </motion.p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#7B2EFF]/50 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          Submit Enquiry
                        </>
                      )}
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


