'use client';

import { Section } from '@/ui/Section';
import { Tab } from '@/ui/Tab';
import { getTabs } from '@/components/Sections/ExperiencesContent';
import { Card } from '@/ui/Card';
import { useCurrentTab } from '@/hooks/useCurrentTab';

export function ExperiencesSection() {
  const { currentTab, handleTabClick } = useCurrentTab('exp1-tab');
  const tabs = getTabs({ iconSize: 27 });

  return (
    <Section.Root
      id='exp'
      centralized
      className='flex min-h-[60vh] scroll-mt-14 flex-col'
    >
      <Section.Title title='Experiências' />
      <Section.Content className='mt-4'>
        <Tab.Root>
          <Tab.Header id='tab-header'>
            {tabs.map((tab) => (
              <Tab.Title
                activeTab={currentTab === `${tab.id}`}
                key={tab.id}
                id={tab.id}
                title={tab.title}
                onClick={(event) =>
                  handleTabClick((event.target as HTMLButtonElement).id)
                }
              />
            ))}
          </Tab.Header>
          {tabs.map((tab) => {
            if (currentTab === `${tab.id}`)
              return (
                <Tab.Content
                  id='tabContent'
                  key={tab.id}
                  contentToShow={
                    <Card.Root>
                      <Card.Header>
                        <Card.Title title={tab.job} />
                        <span className='text-end font-semibold'>
                          {tab.period}
                        </span>
                      </Card.Header>
                      <Card.Content className='mb-0'>
                        <p className='mt-0'>{tab.content}</p>
                        <ul
                          key={tab.title}
                          className='mb-0 flex flex-wrap items-center justify-start gap-5'
                        >
                          {tab.techs?.map((tech) => (
                            <li key={tech.name}>{tech.icon}</li>
                          ))}
                        </ul>
                      </Card.Content>
                    </Card.Root>
                  }
                />
              );
          })}
        </Tab.Root>
      </Section.Content>
    </Section.Root>
  );
}
