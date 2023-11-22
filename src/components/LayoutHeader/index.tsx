'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/ui/Header';
import { navItems } from '@/data/navItems';

export function LayoutHeader() {
  const currentPage = usePathname();

  return (
    <Header.Root>
      <Header.Nav>
        {currentPage !== '/projects' && <Header.Items menuItems={navItems} />}
        <Header.ToggleTheme />
        {currentPage !== '/projects' && <Header.BurgerMenu />}
      </Header.Nav>
    </Header.Root>
  );
}
