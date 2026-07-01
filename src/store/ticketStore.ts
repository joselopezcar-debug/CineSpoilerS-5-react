import { create } from "zustand";
import type { Movie } from "@/types/movie";

interface TicketStore {
  tickets: Movie[];

  addTicket: (movie: Movie) => void;

  removeTicket: (id: number) => void;

  clearTickets: () => void;
}

export const useTicketStore = create<TicketStore>((set) => ({
  tickets: [],

  addTicket: (movie) =>
    set((state) => {
      const exists = state.tickets.some(
        (ticket) => ticket.id === movie.id
      );

      if (exists) {
        return state;
      }

      return {
        tickets: [...state.tickets, movie],
      };
    }),

  removeTicket: (id) =>
    set((state) => ({
      tickets: state.tickets.filter(
        (ticket) => ticket.id !== id
      ),
    })),

  clearTickets: () =>
    set({
      tickets: [],
    }),
}));