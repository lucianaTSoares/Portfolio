import { FloatButton } from '@/components/FloatButton';
import { AboutSection } from '@/components/Sections/About';
import { PresentationSection } from '@/components/Sections/Presentation';
import { ProjectsSection } from '@/components/Sections/Projects';

export default function Home() {
  return (
    <main>
      <PresentationSection />
      <ProjectsSection />
      <AboutSection />
      <FloatButton />
    </main>
  );
}
