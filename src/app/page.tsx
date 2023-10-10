import { FloatButton } from '@/components/FloatButton';
import { AboutSection } from '@/components/Sections/About';
import { PresentationSection } from '@/components/Sections/Presentation';
import { ProjectsSection } from '@/components/Sections/Projects';
import { ExperiencesSection } from '@/components/Sections/Experiences';
import { ServicesSection } from '@/components/Sections/Services';
import { InfiniteCarousel } from '../components/InfiniteCarousel';
import { ContactSection } from '../components/Sections/ContactSection';

export default function Home() {
  return (
    <main>
      <PresentationSection />
      <ServicesSection />
      <InfiniteCarousel />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactSection />
      <ProjectsSection />
      <FloatButton />
    </main>
  );
}
