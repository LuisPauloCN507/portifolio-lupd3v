import { Repository } from "@/lib/github";

interface ProjectCardProps {
  repo: Repository;
}

export function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
      <div>
        <h4
          className="text-xl font-bold text-zinc-100 mb-2 truncate"
          title={repo.name}
        >
          {repo.name}
        </h4>
        <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
          {repo.description ||
            "Projeto desenvolvido durante minha jornada como desenvolvedor Full-Stack."}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
        <div className="flex items-center gap-2">
          {/* Bolinha colorida para representar a linguagem */}
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="text-xs font-medium text-zinc-300">
            {repo.language || "Web"}
          </span>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-zinc-100 bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors"
        >
          Ver Código
        </a>
      </div>
    </div>
  );
}
