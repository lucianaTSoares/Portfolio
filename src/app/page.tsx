import { FloatButton } from '../components/FloatButton';
import { About } from '../components/Sections/About';
import { Presentation } from '../components/Sections/Presentation';

export default function Home() {
  return (
    <main className=''>
      <Presentation />
      <About />
      <About />
      <About />
      <About />
      <FloatButton />
    </main>
  );
}
