import { useState } from "react";
import { backendApi } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await backendApi.post("/auth/register", { name, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao cadastrar usuário");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="m-auto flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 rounded-2xl bg-slate-800 p-8"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Criar Conta
        </h1>

        {error && (
          <p className="mb-4 text-center text-sm text-red-500">{error}</p>
        )}

        <label className="mb-3 block">
          <span className="text-white">Nome</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md bg-gray-100 p-2 outline-none"
            required
          />
        </label>

        <label className="mb-3 block">
          <span className="text-white">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md bg-gray-100 p-2 outline-none"
            required
          />
        </label>

        <label className="mb-6 block">
          <span className="text-white">Senha</span>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md bg-gray-100 p-2 outline-none"
              required
            />
            {password && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-slate-800 hover:text-slate-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            )}
          </div>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
        <p className="mt-4 text-center text-sm text-white">
          Já tem uma conta?{" "}
          <a href="/login" className="text-blue-400 hover:text-blue-300">
            Entrar
          </a>
        </p>
      </form>
    </div>
  );
}
