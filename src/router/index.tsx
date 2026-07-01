import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages/HomePage";
import { MovieDetailPage } from "@/pages/MovieDetailPage";
import { MoviesPage } from "@/pages/MoviesPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetailPage />,
      },
    ],
  },
]);