'use client';

import { useModal } from '@/contexts/ModalContext';
import SoftwareSolutions from './SoftwareSolutions';

export default function SoftwareSolutionsClient() {
  const { onOpenModal } = useModal();
  return <SoftwareSolutions onOpenModal={onOpenModal} />;
}