'use client';

import { useModal } from '@/contexts/ModalContext';
import WebDevelopment from '@/components/pages/WebDevelopment';

export default function WebDevelopmentPage() {
  const { onOpenModal } = useModal();
  return <WebDevelopment onOpenModal={onOpenModal} />;
}

