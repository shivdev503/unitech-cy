'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="relative bg-[#0A0A12]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-purple-500/20">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B2EFF] to-transparent" />
            
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 p-1 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-gradient-to-r from-[#7B2EFF]/20 to-[#00E0FF]/20 rounded-xl">
                <Cookie className="w-5 h-5 text-[#00E0FF]" />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-2">Cookie Notice</h4>
                <p className="text-white/60 text-sm">
                  We use cookies to enhance your browsing experience and analyze our traffic. 
                  By clicking "Accept", you consent to our use of cookies.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAccept}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-[#7B2EFF] to-[#00E0FF] rounded-lg text-sm"
              >
                Accept
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDecline}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 hover:text-white transition-colors"
              >
                Decline
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


