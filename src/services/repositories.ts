type GetRepositoriesProps = {
  repositoriesToShow: string[];
  visibility?: string;
  sort?: string;
};

export type TRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  topics: string[];
};

async function getRepositories({
  repositoriesToShow,
  visibility = 'public',
  sort = 'created',
}: GetRepositoriesProps): Promise<TRepository[]> {
  const params = new URLSearchParams({
    visibility,
    sort,
  });

  const res = await fetch(`https://api.github.com/user/repos?${params}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  });
  const data: TRepository[] = await res.json();

  return data.filter((repo) =>
    repositoriesToShow.includes(repo.name)
  );
}

export { getRepositories };
