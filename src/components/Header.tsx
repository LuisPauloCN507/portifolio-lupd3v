import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-100">
          Lupd3v<span className="text-blue-500">.</span>
        </Link>
        <nav className="flex gap-4 md:gap-6 text-sm font-medium text-zinc-400">
          <Link href="#inicio" className="hover:text-zinc-100 transition-colors">Início</Link>
          <Link href="#sobre" className="hover:text-zinc-100 transition-colors">Sobre</Link>
          <Link href="#projetos" className="hover:text-zinc-100 transition-colors">Projetos</Link>
          <Link href="#contato" className="hover:text-zinc-100 transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  );
}