'use client';

import { useModal } from '@/contexts/ModalContext';
import NetworkSetup from '@/components/pages/NetworkSetup';

export default function NetworkSetupPage() {
  const { onOpenModal } = useModal();
  return <NetworkSetup onOpenModal={onOpenModal} />;
}

