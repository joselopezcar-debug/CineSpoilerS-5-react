import { Hero } from "@/components/shared/Hero";
import { MovieGrid } from "@/components/shared/MovieGrid";
import { useMovies } from "@/hooks/useMovies";

export function HomePage() {
  const {
    data: movies,
    isLoading,
    isError,
  } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !movies) {
    return <div>Error loading movies.</div>;
  }

  return (
    <>
      <Hero />

      <section className="container mx-auto px-4 pb-16">
        <h2 className="mb-6 text-3xl font-bold">
          Featured Movies
        </h2>

        <MovieGrid movies={movies} />
      </section>
    </>
  );
}