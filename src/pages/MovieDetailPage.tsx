import { useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useMovie } from "@/hooks/useMovie";
import { useNavigate } from "react-router-dom";
import { useTicketStore } from "@/store/ticketStore";

export function MovieDetailPage() {
  const { id } = useParams();

  const movieId = Number(id);

  const navigate = useNavigate();

const addTicket = useTicketStore(
  (state) => state.addTicket
);

  const {
    data: movie,
    isLoading,
    isError,
  } = useMovie(movieId);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        Loading movie...
      </div>
    );
  }

  if (isError || !movie) {
    return (
      <div className="container mx-auto px-4 py-16">
        Movie not found.
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-10 md:grid-cols-[300px_1fr]">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full rounded-lg"
        />

        <div>
          <h1 className="mb-4 text-4xl font-bold">
            {movie.title}
          </h1>

          <Badge>
            {movie.genre}
          </Badge>

          <p className="mt-6 text-muted-foreground">
            {movie.description}
          </p>

          <div className="mt-8 space-y-2">
            <p>
              <strong>Duration:</strong>{" "}
              {movie.duration} min
            </p>

            <p>
              <strong>Rating:</strong>{" "}
              {movie.rating}
            </p>
          </div>

          <Button
            className="mt-8"
            onClick={() => {
              addTicket(movie);
              navigate("/checkout");
            }}
          >
            Buy Ticket
          </Button>
        </div>
      </div>
    </section>
  );
}