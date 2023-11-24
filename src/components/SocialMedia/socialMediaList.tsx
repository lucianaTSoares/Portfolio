import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';

const iconSize = 28;

export const socialMediaList = [
  {
    name: 'LinkedIn',
    icon: (
      <FiLinkedin
        size={iconSize}
        className='text-zinc-700 transition-all duration-300 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-400'
      />
    ),
    path: 'https://linkedin.com/in/lucianatsoares',
  },
  {
    name: 'GitHub',
    icon: (
      <FiGithub
        size={26}
        className='text-zinc-700 transition-all duration-300 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-400'
      />
    ),
    path: 'https://github.com/lucianaTSoares',
  },
  {
    name: 'E-mail',
    icon: (
      <FiMail
        size={iconSize}
        className='text-zinc-700 transition-all duration-300 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-400'
      />
    ),
    path: 'mailto:lucianat.s@hotmail.com',
  },
];
