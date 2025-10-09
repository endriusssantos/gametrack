import api from "./api";

export async function fetchGames({
  page = 1,
  page_size = 12,
  ordering = "-relevance",
  search = "",
} = {}) {
  const { data } = await api.get("/games", {
    params: { page, page_size, ordering, search },
  });
  return data;
}

export async function fetchGameById(id) {
  const { data } = await api.get(`/games/${id}`);
  return data;
}
