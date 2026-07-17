import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 mt-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Luis Paulo. Todos os direitos reservados.</p>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/Lupd3v" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-zinc-200 transition-colors hover:-translate-y-1 transform duration-300"
            title="Meu GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/seu-linkedin" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-zinc-200 transition-colors hover:-translate-y-1 transform duration-300"
            title="Meu LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="#contato" 
            className="hover:text-zinc-200 transition-colors hover:-translate-y-1 transform duration-300"
            title="Entrar em contato"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
