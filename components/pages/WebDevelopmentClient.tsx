'use client';

import { useModal } from '@/contexts/ModalContext';
import WebDevelopment from './WebDevelopment';

export default function WebDevelopmentClient() {
  const { onOpenModal } = useModal();
  return <WebDevelopment onOpenModal={onOpenModal} />;
}