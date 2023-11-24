'use client';

import { useEffect, useState } from 'react';
import { ToastPosition, Toaster } from 'react-hot-toast';

export function ToasterCustom() {
  const [position, setPosition] = useState<ToastPosition>('top-right');

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth <= 767) {
        setPosition('top-center');
      } else {
        setPosition('top-right');
      }
    };

    window.addEventListener('resize', checkWindowSize);

    checkWindowSize();

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <Toaster
      position={position}
      toastOptions={{
        duration: 4000,
        success: {
          style: {
            backgroundColor: 'rgb(70, 170, 119)',
            color: '#FFFFFF',
          },
          iconTheme: {
            primary: '#FFFFFF',
            secondary: 'rgb(70, 170, 119)',
          },
        },
        error: {
          style: {
            backgroundColor: 'rgb(255, 75, 75)',
            color: '#FFFFFF',
          },
          iconTheme: {
            primary: '#FFFFFF',
            secondary: 'rgb(255, 75, 75)',
          },
        },
      }}
    />
  );
}
