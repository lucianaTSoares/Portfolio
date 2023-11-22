import { getRepositories } from '@/services/repositories';
import { ErrorOnList } from '@/components/GroupProjectsCards/ErrorOnList';
import Link from 'next/link';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { ProjectList } from './ProjectList';

interface GroupProjectsCardsProps {
  repositoriesToShow: string[];
  isBackAction?: boolean;
}

export async function GroupProjectsCards({
  repositoriesToShow,
  isBackAction,
}: GroupProjectsCardsProps) {
  const getRepositoriesFromService = async () => {
    return await getRepositories({ repositoriesToShow });
  };

  const repositories = await getRepositoriesFromService();

  if (!repositories || !repositories.success) return <ErrorOnList />;

  return (
    <>
      <Link
        href={isBackAction ? '/#projects' : '/projects'}
        scroll={false}
        className={twMerge(
          'flex w-full items-center gap-1 font-bold',
          isBackAction ? 'justify-start' : 'justify-end'
        )}
      >
        {isBackAction ? (
          <>
            <MdKeyboardDoubleArrowLeft size={15} />
            <span className='hover:underline'>Voltar</span>
          </>
        ) : (
          <>
            <span className='hover:underline'>Ver mais</span>
            <MdKeyboardDoubleArrowRight size={15} />
          </>
        )}
      </Link>
      <ProjectList repositories={repositories} />
    </>
  );
}
