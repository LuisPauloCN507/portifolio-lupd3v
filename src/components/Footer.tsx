export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} Luis Paulo. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Lupd3v"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/seu-linkedin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
