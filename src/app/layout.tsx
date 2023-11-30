import { AOSInit } from '@/aos';
import { FeedbackWidget } from '@/components/FeedbackWidget';
import { FloatButton } from '@/components/FloatButton';
import { Footer } from '@/components/Footer';
import { LayoutHeader } from '@/components/LayoutHeader';
import { ToasterCustom } from '@/components/ToasterCustom';
import { BurgerMenuProvider } from '@/context/burgerMenuContext';
import { Metadata } from 'next';
import { Montserrat, Poppins, Roboto_Mono } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

const dmSans = Poppins({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LuDev - Home',
  authors: { name: 'Luciana Soares' },
  description:
    'Sou a Luciana, programadora que ama oferecer experiências digitais incríveis às pessoas.',
  openGraph: {
    title: 'LuDev',
    description:
      'Sou a Luciana, programadora que ama oferecer experiências digitais incríveis às pessoas.',
    type: 'website',
    images: ['../../public/preview.png'],
    siteName: 'LuDev',
    url: 'https://ludev.tech',
  },
  alternates: {
    canonical: 'https://ludev.tech',
  },
  keywords: [
    'desenvolvedor',
    'programador',
    'desenvolvimento',
    'website',
    'portfolio',
    'site',
    'website',
    'fullstack',
    'frontend',
    'backend',
  ],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='pt-br'
      className={`${montserrat.variable} ${robotoMono.variable} ${dmSans.variable} dark`}
    >
      <AOSInit />
      <body className='prose max-w-none bg-light dark:prose-invert prose-h1:text-3xl prose-h2:mt-0 prose-h2:text-[2rem] prose-h3:m-0 prose-h3:font-bold prose-p:font-normal prose-a:no-underline prose-ul:p-0 prose-li:m-0 prose-li:list-none prose-li:p-0 dark:bg-dark dark:prose-p:font-light sm:prose-h1:text-5xl'>
        <BurgerMenuProvider>
          <LayoutHeader />
        </BurgerMenuProvider>
        {children}
        <Footer />
        <FloatButton />
        <FeedbackWidget />
        <ToasterCustom />
      </body>
    </html>
  );
}
