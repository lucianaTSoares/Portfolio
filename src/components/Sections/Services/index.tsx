import { Section } from '@/ui/Section';
import { ServiceContent } from '@/components/ServicesContent';
import { useServicesSection } from '@/hooks/useServicesSection';

export function ServicesSection() {
  const { servicesData, mappedServicesIcons, getIconSize } =
    useServicesSection();

  return (
    <Section.Root
      id='services'
      centralized
      className='flex scroll-mt-20 flex-col'
    >
      <Section.Title title='Serviços' />
      <Section.Content>
        {servicesData.map((service) => (
          <ServiceContent
            key={service.title}
            data={service}
            svgImage={mappedServicesIcons[service.title]}
            imageClassName={
              service.title === 'APIs' ? '!mx-2 !my-0' : undefined
            }
            imageHeight={getIconSize(service.title)}
            imageWidth={getIconSize(service.title)}
          />
        ))}
      </Section.Content>
    </Section.Root>
  );
}
