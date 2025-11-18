'use client';

import { useModal } from '@/contexts/ModalContext';
import RemoteSupport from '@/components/pages/RemoteSupport';

export default function RemoteSupportPage() {
  const { onOpenModal } = useModal();
  return <RemoteSupport onOpenModal={onOpenModal} />;
}

