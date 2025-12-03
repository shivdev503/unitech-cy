'use client';

import { useModal } from '@/contexts/ModalContext';
import NetworkSetup from './NetworkSetup';

export default function NetworkSetupClient() {
  const { onOpenModal } = useModal();
  return <NetworkSetup onOpenModal={onOpenModal} />;
}