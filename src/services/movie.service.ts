import { movies } from "@/mocks/movies";

export const movieService = {
  async getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return movies;
  },

  async getMovieById(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return movies.find((movie) => movie.id === id) ?? null;
  },
};