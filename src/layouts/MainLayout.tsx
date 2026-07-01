import { Outlet } from "react-router-dom";

import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}