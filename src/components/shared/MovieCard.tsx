import { Link } from "react-router-dom";

import type { Movie } from "@/types/movie";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card>
      <CardHeader>
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="aspect-[2/3] w-full rounded-md object-cover"
        />
      </CardHeader>

      <CardContent>
        <CardTitle>{movie.title}</CardTitle>

        <p className="mt-2 text-sm text-muted-foreground">
          {movie.genre}
        </p>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/movies/${movie.id}`}>
            Ver detalle
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}