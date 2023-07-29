import { FloatButton } from '../components/FloatButton';
import { About } from '../components/Sections/About';
import { Presentation } from '../components/Sections/Presentation';

export default function Home() {
  return (
    <main className='lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll'>
      <Presentation />
      <About />
      <About />
      <About />
      <About />
      <FloatButton />
    </main>
  );
}
