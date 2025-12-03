'use client';

import { useModal } from '@/contexts/ModalContext';
import RemoteSupport from './RemoteSupport';

export default function RemoteSupportClient() {
  const { onOpenModal } = useModal();
  return <RemoteSupport onOpenModal={onOpenModal} />;
}