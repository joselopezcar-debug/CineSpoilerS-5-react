import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="text-xl font-bold"
        >
          CineSpoilerS
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/movies">
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
}