import { TechStack } from "@/components/TechStack";
import { ProjectCard } from "@/components/ProjectCard";
import { getGithubRepos } from "@/lib/github";
import { About } from "@/components/About";
import { Education } from "@/components/Education";

export default async function Home() {
  const repos = await getGithubRepos();

  return (
    <main className="flex flex-col items-center">
      {/* Seção Hero (Apresentação) */}
      <section
        id="inicio"
        className="w-full max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-zinc-100">
          Luis Paulo
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-500 font-medium mb-8">
          Front-End Developer | HTML & CSS | JavaScript | TypeScript | React |
          Next.js
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Desenvolvendo interfaces modernas e focadas em performance no ambiente
          Windows. Estudante de Análise e Desenvolvimento de Sistemas (ADS) com
          o objetivo de entregar soluções seguras e escaláveis, rumo ao
          Full-Stack.
        </p>
      </section>

      {/* Seção de Habilidades */}
      <TechStack />

      {/* Seção Sobre Mim */}
      <About />

      {/* Seção de Formação */}
      <Education />

      {/* Seção de Projetos Integrados com GitHub */}
      <section
        id="projetos"
        className="w-full py-20 bg-zinc-950 border-t border-zinc-900"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center md:text-left">
            <h3 className="text-3xl font-bold text-zinc-100 mb-4">
              Projetos Recentes
            </h3>
            <p className="text-zinc-400">
              Meus últimos repositórios desenvolvidos e atualizados
              automaticamente via API do GitHub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
