// Definir como é o formato de um repositório que vem do GitHub
export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

// Função que busca os repositórios do meu perfil
export async function getGithubRepos(): Promise<Repository[]> {
  // A API do GitHub busca os repositórios do meu github
  const response = await fetch(
    "https://api.github.com/users/Lupd3v/repos?sort=updated&per_page=6",
    {
      // Esse cache faz com que o Next.js revalide os dados a cada 24 horas
      next: { revalidate: 86400 },
    },
  );

  if (!response.ok) {
    throw new Error("Falha ao buscar os repositórios do GitHub");
  }

  // Avisar ao TypeScript que os dados que chegam são do tipo Repository[]
  const data: Repository[] = await response.json();

  return data.filter((repo) => !repo.fork);
}
