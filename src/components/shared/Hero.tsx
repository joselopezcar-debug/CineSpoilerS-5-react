import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <h1 className="mb-4 text-5xl font-bold tracking-tight">
        Compra entradas para tus películas favoritas
      </h1>

      <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
        Descubre estrenos, revisa información detallada y encuentra la mejor
        experiencia de cine.
      </p>

      <Button asChild size="lg">
        <Link to="/movies">Ver cartelera</Link>
      </Button>
    </section>
  );
}