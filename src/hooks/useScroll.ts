'use client';

import { useCallback, useEffect, useState } from 'react';

export function useScroll(width: number) {
  const [pageWasScrolled, setPageWasScrolled] = useState(false);

  const toggleScroll = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    setPageWasScrolled(scrolled > width);
  }, [width]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleScroll);
    }
  }, [toggleScroll]);

  return { pageWasScrolled };
}
