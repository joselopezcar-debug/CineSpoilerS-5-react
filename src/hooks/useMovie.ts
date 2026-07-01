import { useQuery } from "@tanstack/react-query";

import { movieService } from "@/services/movie.service";

export function useMovie(id: number) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => movieService.getMovieById(id),
  });
}