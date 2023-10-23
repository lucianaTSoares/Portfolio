import { FloatButton } from '@/components/FloatButton';
import { AboutSection } from '@/components/Sections/About';
import { ProjectsSection } from '@/components/Sections/Projects';
import { ExperiencesSection } from '@/components/Sections/Experiences';
import { ServicesSection } from '@/components/Sections/Services';
import { InfiniteCarousel } from '@/components/InfiniteCarousel';
import { FeedbackWidget } from '@/components/FeedbackWidget';
import { PresentationSection } from '@/components/Sections/Presentation';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main>
      <PresentationSection />
      <ServicesSection />
      <InfiniteCarousel />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
      <Footer />
      <FloatButton />
      <FeedbackWidget />
    </main>
  );
}
