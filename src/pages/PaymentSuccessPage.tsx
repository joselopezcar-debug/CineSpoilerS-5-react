import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold">
        Payment Successful!
      </h1>

      <p className="mt-6 text-lg text-muted-foreground">
        Your purchase has been completed successfully.
      </p>

      <Button
        className="mt-10"
        onClick={() => navigate("/movies")}
      >
        Continue Browsing
      </Button>
    </section>
  );
}