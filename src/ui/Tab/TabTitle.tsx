import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TabTitleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  activeTab: boolean;
}

export function TabTitle({ title, activeTab, ...rest }: TabTitleProps) {
  return (
    <button
      className={twMerge(
        'w-fit whitespace-nowrap rounded-lg border-2 border-transparent bg-zinc-300 px-4 py-1 dark:bg-zinc-600' +
          ' bg-opacity-30 text-start font-bold transition-all hover:bg-opacity-100 dark:bg-opacity-30' +
          ' hover:dark:bg-opacity-70',
        activeTab
          ? 'border-tertiary text-tertiary dark:border-primary dark:bg-opacity-50' +
              ' bg-translucent-light dark:bg-translucent-dark' +
              ' dark:text-primary'
          : ''
      )}
      {...rest}
    >
      {title}
    </button>
  );
}
