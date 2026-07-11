export function TechStack() {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section className="w-full py-16 border-t border-zinc-900 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-zinc-100 mb-8">
          Tecnologias e Ferramentas
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-full hover:border-zinc-600 hover:text-zinc-100 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
