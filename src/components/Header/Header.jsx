import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Logo from "../../assets/logo.svg";

const Header = ({ searchTerm, setSearchTerm }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between gap-5 bg-blue-950 px-6 py-4 text-white lg:px-10">
      <a href="#home">
        <img src={Logo} alt="logo" className="w-40 cursor-pointer lg:w-50" />
      </a>

      <div className="hidden w-1/2 items-center gap-2 rounded-full bg-blue-900 p-3 lg:flex">
        <Search size={18} className="text-gray-300" />
        <input
          type="text"
          placeholder="Buscar jogos..."
          className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul
        className={`absolute top-16 left-0 flex w-full flex-col items-center gap-4 bg-blue-950 py-6 text-center transition-all duration-300 lg:static lg:w-auto lg:flex-row lg:py-0 ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0 lg:visible lg:opacity-100"
        } `}
      >
        <div className="flex w-4/5 items-center gap-2 rounded-full bg-blue-900 px-3 py-2 lg:hidden">
          <Search size={18} className="text-gray-300" />
          <input
            type="text"
            placeholder="Buscar jogos..."
            className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <li>
          <a
            href="#home"
            className="rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-900"
          >
            Início
          </a>
        </li>
        <li className="lg:flex">
          <a
            href="#account"
            className="rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-900"
          >
            Minha Conta
          </a>
        </li>
        <li className="lg:flex">
          <a
            href="#games"
            className="rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-900"
          >
            Meus Jogos
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-900"
          >
            Sobre
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
