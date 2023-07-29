'use client';

import { useScroll } from '@/hooks/useScroll';
import { Header } from '../Header';
import { navItems } from '../Header/data/navItems';
import { usePathname } from 'next/navigation';

export function LayoutHeader() {
  const currentPage = usePathname();
  const { pageWasScrolled } = useScroll(10);

  const logoColors = {
    anchor: pageWasScrolled ? 'text-light' : 'text-dark',
    span: pageWasScrolled ? 'text-logo' : 'text-primary',
  };

  const itemsColor = pageWasScrolled ? 'text-light' : 'text-dark';

  return (
    <Header.Root>
      <Header.Nav logoColors={logoColors}>
        {currentPage !== '/projects' && (
          <Header.Items menuItems={navItems} iconColor={itemsColor} />
        )}
        <Header.BurgerMenu />
        <Header.ToggleTheme />
      </Header.Nav>
    </Header.Root>
  );
}
