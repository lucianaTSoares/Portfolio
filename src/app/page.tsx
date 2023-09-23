import { FloatButton } from '@/components/FloatButton';
import { AboutSection } from '@/components/Sections/About';
import { PresentationSection } from '@/components/Sections/Presentation';
import { ProjectsSection } from '@/components/Sections/Projects';
import { ExperiencesSection } from '@/components/Sections/Experiences';

export default function Home() {
  return (
    <main>
      <PresentationSection />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ProjectsSection />
      <FloatButton />
    </main>
  );
}
