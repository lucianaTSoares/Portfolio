import { IoMdBrowsers } from 'react-icons/io';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { getRepositories } from '../../services/Repositories.service';
import { Card } from '../Card';

interface GroupProjectsCardsProps {
  repositoriesToShow: string[];
}

export async function GroupProjectsCards({
  repositoriesToShow,
}: GroupProjectsCardsProps) {
  const repositories = await getRepositories({ repositoriesToShow });

  return (
    <ul className='flex flex-wrap items-stretch justify-center gap-8'>
      {repositories.map((repo) => (
        <li
          id={repo.id.toString()}
          key={repo.id}
          className='w-fit flex-[1_0_auto] md:w-[calc(100%/3)] xl:flex-[1_0_calc(100%/4)]'
        >
          <Card.Root animateOnHover>
            <div>
              <Card.Header>
                <Card.Title title={repo.name} />
              </Card.Header>
              <Card.Content>{repo.description}</Card.Content>
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
