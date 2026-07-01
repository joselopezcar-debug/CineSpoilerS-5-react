import { tmdbClient } from "./tmdb.client";
import type { Movie } from "@/types/movie";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const movieService = {
  async getMovies(): Promise<Movie[]> {
    const { data } = await tmdbClient.get("/movie/popular");

    return data.results.map((movie: any): Movie => ({
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      posterUrl: `${IMAGE_URL}${movie.poster_path}`,
      genre: "Sin especificar",
      duration: 0,
      rating: movie.vote_average,
    }));
  },

  async getMovieById(id: number): Promise<Movie | null> {
    try {
      const { data } = await tmdbClient.get(`/movie/${id}`);

      return {
        id: data.id,
        title: data.title,
        description: data.overview,
        posterUrl: `${IMAGE_URL}${data.poster_path}`,
        genre: data.genres.map((g: any) => g.name).join(", "),
        duration: data.runtime,
        rating: data.vote_average,
      };
    } catch {
      return null;
    }
  },
};