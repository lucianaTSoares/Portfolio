'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease',
      once: true,
    });
  }, []);

  return null;
};
