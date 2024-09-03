import { create } from "zustand";
import {
  UseShoppingCartStore,
  UseShoppingCartStoreActions,
  UseShoppingCartStoreState,
} from "./types";

const initialState: UseShoppingCartStoreState = {
  items: [],
};

const shoppingCartStore = create<UseShoppingCartStore>((set, state) => ({
  ...initialState,

  getMovieQuantity: (movieId) => {
    const _items = state().items;
    const _item = _items.find((item) => item.movie.id === movieId);
    return _item?.quantity ?? 0;
  },

  removeItem: (movieId) => {
    const _items = state().items;
    const movieIndex = _items.findIndex((item) => item.movie.id === movieId);
    if (movieIndex !== -1) {
      _items.splice(movieIndex, 1);
      set({ items: _items });
    }
  },

  changeQuantity: (movie, quantity) => {
    const _items = state().items;
    const movieIndex = _items.findIndex((item) => item.movie.id === movie.id);
    if (movieIndex === -1) {
      set({ items: [..._items, { movie, quantity: 1 }] });
      return;
    }

    if (quantity <= 0) {
      state().removeItem(movie.id);
      return;
    }

    const item = _items[movieIndex];
    _items[movieIndex] = {
      ...item,
      quantity,
    };
    set({ items: _items });
  },

  setItems: (items) => {
    set({ items });
  },

  clearItems: () => {
    set({ items: [] });
  },
}));

export const useShoppingCartStore = (): UseShoppingCartStoreState =>
  shoppingCartStore((state) => ({
    items: state.items,
  }));

export const useShoppingCartStoreActions = (): UseShoppingCartStoreActions =>
  shoppingCartStore((state) => ({
    getMovieQuantity: state.getMovieQuantity,
    changeQuantity: state.changeQuantity,
    removeItem: state.removeItem,
    setItems: state.setItems,
    clearItems: state.clearItems,
  }));
