const BASE = "https://api.rawg.io/api";
const KEY = import.meta.env.VITE_RAWG_KEY;

if (!KEY) {
  console.warn("VITE_RAWG_KEY não encontrada. Verifique o .env");
}

export async function fetchGames({
  page = 1,
  page_size = 12,
  ordering = "-added",
} = {}) {
  const url = `${BASE}/games?key=${KEY}&page=${page}&page_size=${page_size}&ordering=${ordering}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`RAWG API error ${res.status}: ${text}`);
  }
  return res.json();
}

export async function fetchGameById(id) {
  const url = `${BASE}/games/${id}?key=${KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`RAWG game ${id} error: ${res.status}`);
  return res.json();
}
