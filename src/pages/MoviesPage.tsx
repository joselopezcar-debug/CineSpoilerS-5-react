import { MovieGrid } from "@/components/shared/MovieGrid";
import { useMovies } from "@/hooks/useMovies";

export function MoviesPage() {
  const {
    data: movies,
    isLoading,
    isError,
  } = useMovies();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        Loading movies...
      </div>
    );
  }

  if (isError || !movies) {
    return (
      <div className="container mx-auto px-4 py-16">
        Error loading movies.
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">
        Movies
      </h1>

      <MovieGrid movies={movies} />
    </section>
  );
}