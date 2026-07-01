import type { Movie } from "@/types/movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    description:
      "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    genre: "Science Fiction",
    duration: 169,
    rating: 8.7,
  },
  {
    id: 2,
    title: "Dune",
    description:
      "Paul Atreides se enfrenta a su destino en el planeta más peligroso del universo.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    genre: "Science Fiction",
    duration: 155,
    rating: 8.0,
  },
  {
    id: 3,
    title: "The Batman",
    description:
      "Batman investiga una serie de asesinatos que revelan una red de corrupción en Gotham.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    genre: "Action",
    duration: 176,
    rating: 7.8,
  },
  {
    id: 4,
    title: "Joker",
    description:
      "La historia del origen de Arthur Fleck y su transformación en Joker.",
    posterUrl:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    genre: "Drama",
    duration: 122,
    rating: 8.4,
  },
];