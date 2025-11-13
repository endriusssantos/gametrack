export default function About() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 px-6 py-12 text-white lg:flex-row lg:gap-10">
      <div className="mb-8 w-full max-w-sm rounded-2xl bg-blue-950/40 p-6 text-center shadow-lg ring-1 ring-blue-800 lg:sticky lg:top-20 lg:mb-0">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQEwZbVHApPITA/profile-displayphoto-crop_800_800/B4DZmn4o_MIEAM-/0/1759458267935?e=1764201600&v=beta&t=vQHvK3LOTXRNMgv76ac7uWnrWqFLqQgvclc1602SpL8"
          alt="Endrius da Silva dos Santos"
          className="mx-auto mb-4 h-28 w-28 rounded-full border-4 border-blue-700 object-cover"
        />
        <h2 className="text-2xl font-bold text-white">
          Endrius da Silva dos Santos
        </h2>
        <p className="mb-4 text-blue-400">Desenvolvedor Full-Stack</p>
        <p className="mb-6 text-sm text-gray-400">
          Apaixonado por tecnologia, games e design, sempre em busca de novos
          desafios e aprendizados.
        </p>
        <a
          href="https://www.linkedin.com/in/endrius-da-silva-dos-santos-8a7113328"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
        >
          Conecte-se comigo
        </a>
      </div>

      <div className="max-w-2xl text-center leading-relaxed text-gray-300 lg:text-left">
        <h1 className="mb-6 text-3xl font-bold text-blue-400">
          Sobre o GameTrack
        </h1>
        <p className="mb-4">
          O <span className="font-semibold text-blue-400">GameTrack</span> foi
          desenvolvido por mim como um projeto pessoal para praticar{" "}
          <span className="font-semibold text-white">React</span>, consumo de
          APIs e autenticação de usuários.
        </p>
        <p className="mb-4">
          A ideia surgiu porque eu sempre quis ter um lugar para{" "}
          <span className="font-semibold text-white">organizar meus jogos</span>{" "}
          e{" "}
          <span className="font-semibold text-white">
            descobrir novos títulos
          </span>{" "}
          facilmente.
        </p>
        <p className="mb-4">
          O site utiliza a{" "}
          <span className="font-semibold text-white">RAWG API</span> para listar
          milhares de jogos, permitindo favoritar títulos, marcar se já jogou ou
          deseja jogar, e visualizar detalhes completos de cada jogo.
        </p>
        <p className="mb-6">
          É um projeto em constante evolução, novas funcionalidades estão por
          vir 🚀
        </p>
        <div className="mt-8 border-t border-gray-700 pt-6 text-gray-400">
          <p>💡 Criado com muito café, código e paixão por jogos 🎮</p>
        </div>
      </div>
    </div>
  );
}
