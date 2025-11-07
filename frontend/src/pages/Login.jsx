import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendApi } from "../services/api.js";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

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
      const res = await backendApi.post("/auth/login", { email, password });
      const token = res.data.token;

      if (token) {
        login(token);
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao fazer login");
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
          Entrar
        </h1>

        {error && (
          <p className="mb-4 text-center text-sm text-red-500">{error}</p>
        )}

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
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
