export function Contact() {
  return (
    <section
      id="contato"
      className="w-full py-20 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-zinc-100 mb-6">
          Vamos Trabalhar Juntos?
        </h3>
        <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
          Estou sempre aberto a novas oportunidades e desafios no
          desenvolvimento Full-Stack. Seja para uma vaga, um projeto freelancer
          ou apenas para trocar ideias sobre tecnologia e sistemas.
        </p>

        <form className="flex flex-col gap-4 text-left w-full max-w-xl mx-auto">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-300">
              Seu Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ex: João Silva"
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-300"
            >
              Seu E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ex: joao@empresa.com"
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-zinc-300"
            >
              Sua Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Olá, Luis! Gostaria de falar sobre..."
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex justify-center items-center gap-2"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
