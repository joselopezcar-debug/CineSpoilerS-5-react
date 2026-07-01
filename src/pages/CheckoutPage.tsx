import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useTicketStore } from "@/store/ticketStore";

export function CheckoutPage() {
  const navigate = useNavigate();

  const tickets = useTicketStore((state) => state.tickets);
  const clearTickets = useTicketStore((state) => state.clearTickets);

  const total = tickets.length * 25;

  const handlePayment = () => {
    setTimeout(() => {
      clearTickets();
      navigate("/payment-success");
    }, 1000);
  };

  if (tickets.length === 0) {
    return (
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">
          Checkout
        </h1>

        <p className="mt-4">
          No movies selected.
        </p>

        <Button
          className="mt-8"
          onClick={() => navigate("/movies")}
        >
          Browse Movies
        </Button>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">
        Checkout
      </h1>

      <div className="space-y-4">
        {tickets.map((movie) => (
          <div
            key={movie.id}
            className="flex items-center gap-4 rounded-lg border p-4"
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="h-24 rounded"
            />

            <div>
              <h2 className="font-bold">
                {movie.title}
              </h2>

              <p>
                Rating: {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-bold">
        Total: ${total}
      </h2>

      <Button
        className="mt-8"
        onClick={handlePayment}
      >
        Pay Now
      </Button>
    </section>
  );
}