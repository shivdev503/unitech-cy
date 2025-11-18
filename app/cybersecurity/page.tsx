'use client';

import { useModal } from '@/contexts/ModalContext';
import Cybersecurity from '@/components/pages/Cybersecurity';

export default function CybersecurityPage() {
  const { onOpenModal } = useModal();
  return <Cybersecurity onOpenModal={onOpenModal} />;
}

