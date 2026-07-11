// Definir o formato de um repositório que vem do GitHub
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

// Função que busca os repositórios do perfil
export async function getGithubRepos(): Promise<Repository[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/LuisPauloCN507/repos?sort=updated&per_page=6",
      {
        next: { revalidate: 86400 },
      },
    );

    if (!response.ok) {
      console.error(
        `O GitHub recusou a conexão. Status do erro: ${response.status}`,
      );
      return [];
    }

    const data: Repository[] = await response.json();

    return data.filter((repo) => !repo.fork);
  } catch (error) {
    console.error("Falha na rede ou na API ao buscar repositórios:", error);
    return [];
  }
}
