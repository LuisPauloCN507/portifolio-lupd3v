import Link from 'next/link';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-100">
          Lupd3v<span className="text-blue-500">.</span>
        </Link>
        <nav className="flex gap-4 md:gap-6 text-sm font-medium text-zinc-400">
          <Link href="#inicio" className="flex items-center gap-1 hover:text-zinc-100 transition-colors">
            <Home size={16} /> <span className="hidden sm:inline">Início</span>
          </Link>
          <Link href="#sobre" className="flex items-center gap-1 hover:text-zinc-100 transition-colors">
            <User size={16} /> <span className="hidden sm:inline">Sobre</span>
          </Link>
          <Link href="#projetos" className="flex items-center gap-1 hover:text-zinc-100 transition-colors">
            <FolderGit2 size={16} /> <span className="hidden sm:inline">Projetos</span>
          </Link>
          <Link href="#contato" className="flex items-center gap-1 hover:text-zinc-100 transition-colors">
            <Mail size={16} /> <span className="hidden sm:inline">Contato</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
