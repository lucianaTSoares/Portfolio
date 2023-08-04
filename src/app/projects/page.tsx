import { Card } from '../../components/Card';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { IoMdBrowsers } from 'react-icons/io';
import { Section } from '../../components/Section';
import { getRepositories } from '../../services/repositories.service';

export default async function Projects() {
  const repositoriesToShow = [
    'Portfolio2.0',
    'Portfolio',
    'Adopet',
    'HomePlus-API',
    'HomePlus-FrontEnd',
    'Imersao-Dev',
    'GenCash',
    'kenzieflix',
  ];

  const repositories = await getRepositories({ repositoriesToShow });

  // console.log(a.map((e) => e.name));

  return (
    <main className='prose-p:leading-[175%]'>
      <Section.Root>
        <Section.Content>
          <ul className='flex flex-wrap items-stretch justify-center gap-8'>
            {repositories.map((repo) => (
              <li className='w-fit flex-[1_0_auto] md:w-[calc(100%/3)] xl:flex-[1_0_calc(100%/4)]'>
                <Card.Root animateOnHover>
                  <div>
                    <Card.Header>
                      <Card.Title title={repo.name} />
                    </Card.Header>
                    <Card.Content content={repo.description} />
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
        </Section.Content>
      </Section.Root>
    </main>
  );
}
