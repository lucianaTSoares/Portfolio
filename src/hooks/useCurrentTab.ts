'use client';

import { useState } from 'react';

export function useCurrentTab(currentTabName: string) {
  const [currentTab, setCurrentTab] = useState(currentTabName || 'exp1-tab');

  const handleTabClick = (id: string) => {
    setCurrentTab(id);
  };

  return { currentTab, handleTabClick };
}
