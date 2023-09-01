'use client';

import { createContext, useContext } from 'react';
import { useBurgerMenu } from '@/hooks/useBurgerMenu';

export const BurgerMenuContext = createContext();

export function BurgerMenuProvider({ children }) {
  const burgerMenuState = useBurgerMenu();

  return (
    <BurgerMenuContext.Provider value={burgerMenuState}>
      {children}
    </BurgerMenuContext.Provider>
  );
}

export function useBurgerMenuContext() {
  return useContext(BurgerMenuContext);
}
