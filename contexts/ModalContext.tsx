'use client';

import { createContext, useContext, ReactNode } from 'react';

interface ModalContextType {
  onOpenModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children, onOpenModal }: { children: ReactNode; onOpenModal: () => void }) {
  return <ModalContext.Provider value={{ onOpenModal }}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}


