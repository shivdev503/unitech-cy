'use client';

import { useModal } from '@/contexts/ModalContext';
import ITHardware from '@/components/pages/ITHardware';

export default function ITHardwarePage() {
  const { onOpenModal } = useModal();
  return <ITHardware onOpenModal={onOpenModal} />;
}

