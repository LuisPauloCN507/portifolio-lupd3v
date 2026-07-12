export function About() {
  return (
    <section
      id="sobre"
      className="w-full py-20 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Lado do Texto */}
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-zinc-100">Sobre Mim</h3>
            <div className="text-zinc-400 space-y-4 leading-relaxed">
              <p>
                Olá! Sou o Luis Paulo, um desenvolvedor em constante evolução e
                estudante de
                <strong className="text-zinc-200">
                  {" "}
                  Análise e Desenvolvimento de Sistemas (ADS)
                </strong>
                . Minha jornada na tecnologia é movida pela curiosidade de
                entender como as coisas funcionam por baixo dos panos, desde a
                manutenção de hardware até a construção de aplicações web
                completas.
              </p>
              <p>
                Atualmente, meu foco principal é dominar o ecossistema{" "}
                <strong className="text-blue-400">
                  Front-End e Full-Stack
                </strong>
                . Construo interfaces modernas e responsivas utilizando HTML,
                CSS, JavaScript, TypeScript, React e Next.js.
              </p>
              <p>
                Tenho facilidade de adaptação e uma rotina de desenvolvimento
                versátil, programando tanto em ambiente Windows quanto em
                distribuições Linux (como o Ubuntu), o que me dá uma visão mais
                ampla sobre sistemas operacionais, infraestrutura e performance
                de código.
              </p>
            </div>
          </div>

          {/* Lado do Destaque Visual (Um card de estatísticas rápidas) */}
          <div className="flex-1 w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl shadow-black/50">
            <h4 className="text-xl font-semibold text-zinc-100 mb-6 border-b border-zinc-800 pb-4">
              Perfil Rápido
            </h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex justify-between items-center">
                <span>🎓 Formação:</span>
                <span className="text-zinc-100 font-medium text-right">
                  Estudante de ADS
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>💻 Foco:</span>
                <span className="text-zinc-100 font-medium text-right">
                  Full-Stack Developer
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>⚙️ SO:</span>
                <span className="text-zinc-100 font-medium text-right">
                  Windows & Linux
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span>🚀 Objetivo:</span>
                <span className="text-zinc-100 font-medium text-right">
                  Criar soluções escaláveis
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
