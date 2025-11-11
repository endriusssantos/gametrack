import { useState, useContext } from "react";
import { Menu, X, Search, LogOut } from "lucide-react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Header = ({ searchTerm, setSearchTerm, resetApp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogoClick = () => {
    resetApp();
  };

  const handleLogout = () => {
    logout();
    setShowMenu(false);
    setIsOpen(false);
  };

  return (
    <nav className="relative flex items-center justify-between gap-5 bg-blue-950 px-6 py-4 text-white lg:px-10">
      <Link to="/" onClick={handleLogoClick}>
        <img src={Logo} alt="logo" className="w-40 cursor-pointer lg:w-50" />
      </Link>
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
        }`}
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
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-900"
          >
            Início
          </Link>
        </li>

        <li className="relative">
          {user ? (
            <div className="flex flex-col items-center">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-900"
              >
                {user.name}
              </button>
              {showMenu && (
                <div className="absolute top-12 w-32 rounded-md bg-blue-900 text-white shadow-md">
                  <button
                    onClick={handleLogout}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-md px-4 py-2 text-sm hover:bg-blue-950"
                  >
                    <LogOut size={16} /> Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-900"
            >
              Minha Conta
            </Link>
          )}
        </li>

        <li>
          <Link
            to="/my-games"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-900"
          >
            Meus Jogos
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-3 py-2 transition-all duration-300 hover:bg-blue-900"
          >
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
