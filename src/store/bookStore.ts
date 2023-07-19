/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { omit } from "lodash";
import { create } from "zustand";

interface IBook {
  amount: number;
  title: string;
  author: string;
  setAmount: (newAmount: number) => void;
  updateAmount: (number: number) => void;
  deleteEverything: () => void;
  deleteAuthor: () => void;
}

export const useBookStore = create<IBook>((set) => ({
  amount: 40,
  title: "Alice's Adventures in Wonderland",
  author: "Lewis Carroll",
  setAmount: (newAmount: number) => set({ amount: newAmount }),

  // set function can also receive a function as a parameter, which is useful to get the previous state.
  // Spreading properties should also be taken into account when your states are objects or arrays that are constantly changing
  updateAmount: (number: number) =>
    set((state) => ({ ...state, amount: state.amount + number })),

  // set function accepts a second boolean parameter, default is false
  // instead of merging, it will replace the state model

  // clears the entire store, actions included
  deleteEverything: () => set({}, true),

  // omit function from lodash can be used to delete a specific property from an object
  deleteAuthor: () => set((state) => omit(state, ["author"]), true),
}));
