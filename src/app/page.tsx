import { FloatButton } from '../components/FloatButton';
import { AboutSection } from '../composedComponents/Sections/About';
import { PresentationSection } from '../composedComponents/Sections/Presentation';
import { ProjectsSection } from '../composedComponents/Sections/Projects';

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
