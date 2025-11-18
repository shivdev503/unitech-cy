'use client';

import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { ModalProvider } from '@/contexts/ModalContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';

export function Providers({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onOpenModal = () => setIsModalOpen(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ModalProvider onOpenModal={onOpenModal}>
        <Header onOpenModal={onOpenModal} />
        {children}
        <Footer onOpenModal={onOpenModal} />
        <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <WhatsAppButton />
        <CookieConsent />
      </ModalProvider>
    </ThemeProvider>
  );
}

