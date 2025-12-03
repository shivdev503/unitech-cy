'use client';

import { useModal } from '@/contexts/ModalContext';
import Cybersecurity from './Cybersecurity';

export default function CybersecurityClient() {
  const { onOpenModal } = useModal();
  return <Cybersecurity onOpenModal={onOpenModal} />;
}