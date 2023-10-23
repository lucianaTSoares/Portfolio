'use client';

import { PiChatTeardropText } from 'react-icons/pi';
import { WidgetForm } from './WidgetForm';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/ui/Button';

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={twMerge(
        'fixed bottom-8 left-8 z-10 md:max-w-[50%] lg:max-w-[50%]',
        isOpen ? 'w-full lg:w-1/3' : 'w-fit'
      )}
    >
      <div className={twMerge('pr-16', isOpen ? 'block' : 'hidden')}>
        <WidgetForm />
      </div>
      <Button
        className='group mt-8 rounded-full'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <PiChatTeardropText size={30} />
        <span
          className={twMerge(
            'max-w-0 overflow-hidden transition-all duration-500 group-hover:max-w-xs',
            isOpen && 'max-w-xs'
          )}
        >
          <span className='ml-2'>Feedback</span>
        </span>
      </Button>
    </div>
  );
}
