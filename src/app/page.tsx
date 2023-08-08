import { FloatButton } from '../components/FloatButton';
import { Presentation } from '../components/Sections/Presentation';
import { About } from '../components/Sections/About';

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
