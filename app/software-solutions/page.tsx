'use client';

import { useModal } from '@/contexts/ModalContext';
import SoftwareSolutions from '@/components/pages/SoftwareSolutions';

export default function SoftwareSolutionsPage() {
  const { onOpenModal } = useModal();
  return <SoftwareSolutions onOpenModal={onOpenModal} />;
}

