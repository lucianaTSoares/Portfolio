import { TRepository, TResponse } from '@/types';

type GetRepositoriesProps = {
  repositoriesToShow: string[];
  visibility?: string;
  sort?: string;
};

async function getRepositories({
  repositoriesToShow,
  visibility = 'public',
  sort = 'created',
}: GetRepositoriesProps): Promise<TResponse | null> {
  try {
    const params = new URLSearchParams({
      visibility,
      sort,
    });

    const res = await fetch(`https://api.github.com/user/repos?${params}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    });

    const data = await res.json();

    if (!data.length) {
      return {
        data: [],
        success: false,
      };
    }

    const filterRepositories = data.filter((repo: TRepository) =>
      repositoriesToShow.includes(repo.name)
    ) as TRepository[];

    return {
      data: filterRepositories,
      success: true,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

export { getRepositories };
