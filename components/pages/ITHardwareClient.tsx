'use client';

import { useModal } from '@/contexts/ModalContext';
import ITHardware from '@/components/pages/ITHardware';

export default function ITHardwareClient() {
  const { onOpenModal } = useModal();
  return <ITHardware onOpenModal={onOpenModal} />;
}