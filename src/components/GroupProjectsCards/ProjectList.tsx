'use client';

import { useFadeTransition } from '@/hooks/useFadeTransition';
import { TResponse } from '@/types';
import { Card } from '@/ui/Card';
import { IoMdBrowsers } from 'react-icons/io';
import { RiGitRepositoryLine } from 'react-icons/ri';

interface ProjectListProps {
  repositories: TResponse;
}

export function ProjectList({ repositories }: ProjectListProps) {
  const count = useFadeTransition(repositories.data, 60);

  return (
    <ul className='mt-2 flex flex-wrap gap-8'>
      {repositories.data.slice(0, count).map((repo) => (
        <li
          id={repo.id.toString()}
          key={repo.id}
          data-aos='fade-up'
          className='w-fit flex-[1_0_auto] md:w-[calc(100%/3)] xl:flex-[1_0_calc(100%/4)]'
        >
          <Card.Root animateOnHover>
            <div>
              <Card.Header>
                <Card.Title title={repo.name} />
              </Card.Header>
              <Card.Content>
                <p>{repo.description}</p>
              </Card.Content>
              <Card.Tags tags={repo.topics} />
            </div>
            <Card.Actions>
              <Card.Link
                text='Ir para o repositório'
                href={repo.html_url}
                icon={RiGitRepositoryLine}
              />
              {repo.homepage && (
                <Card.Link
                  text='Ir para o site'
                  href={repo.homepage}
                  icon={IoMdBrowsers}
                />
              )}
            </Card.Actions>
          </Card.Root>
        </li>
      ))}
    </ul>
  );
}
