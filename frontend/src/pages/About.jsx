import { Github } from "lucide-react";

const About = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center gap-2 p-5 text-center text-white lg:max-w-1/2">
      <p>
        O GameTrack é uma aplicação feita para gamers que buscam descobrir novos
        jogos, ver notas, avaliações e informações detalhadas sobre cada título.
      </p>
      <p>
        Foi desenvolvida com React, Tailwind CSS e React Query, consumindo a API
        RAWG.io para exibir dados atualizados sobre os principais lançamentos.
      </p>
      <p>
        O objetivo do projeto é praticar conceitos modernos do ecossistema React
        e, ao mesmo tempo, criar uma experiência agradável e útil para quem ama
        videogames.
      </p>
      <p>
        💡 Em breve, o GameTrack contará com cadastro de usuários, listas
        personalizadas e muito mais!
      </p>
      <p>👨🏻‍💻 Criado por Endrius</p>
      <a href="https://github.com/endriusssantos" target="_blank">
        <Github />
      </a>
    </div>
  );
};

export default About;
