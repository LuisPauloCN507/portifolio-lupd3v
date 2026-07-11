import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Seção Hero (Apresentação) */}
      <section
        id="sobre"
        className="w-full max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-zinc-100">
          Luis Paulo
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-500 font-medium mb-8">
          Front-End Developer
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
    </main>
  );
}
