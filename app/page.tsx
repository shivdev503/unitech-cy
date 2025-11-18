'use client';

import { useModal } from '@/contexts/ModalContext';
import Home from '@/components/pages/Home';

export default function Page() {
  const { onOpenModal } = useModal();
  return <Home onOpenModal={onOpenModal} />;
}

