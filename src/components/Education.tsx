export function Education() {
  return (
    <section className="w-full py-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-zinc-100 mb-16 text-center">
          Trajetória e Formação
        </h3>

        {/* Linha vertical centralizada em telas maiores */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          {/* Card 1 - ADS */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-xl shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              🎓
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 transition-colors">
              <h4 className="font-bold text-zinc-100 text-lg mb-1">
                Análise e Desenvolvimento de Sistemas (ADS)
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-4">
                Ensino Superior
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Foco em engenharia de software, modelagem de banco de dados,
                lógica de programação e arquitetura de sistemas seguros e
                escaláveis.
              </p>
            </div>
          </div>

          {/* Card 2 - Desenvolvimento Full-Stack */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-xl shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              💻
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 transition-colors">
              <h4 className="font-bold text-zinc-100 text-lg mb-1">
                Especialização Prática Full-Stack
              </h4>
              <p className="text-sm text-blue-500 font-medium mb-4">
                Estudos Contínuos
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Desenvolvimento de projetos reais e estruturados do básico ao
                avançado utilizando HTML, CSS, JavaScript, React, Next.js e
                TypeScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
