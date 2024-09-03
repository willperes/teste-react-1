import { ShoppingCartItem } from "../../models";

export type UseShoppingCartStoreState = {
  items: ShoppingCartItem[];
};

export type UseShoppingCartStoreActions = {
  getMovieQuantity: (movieId: number) => number;
  changeQuantity: (movie: ShoppingCartItem["movie"], quantity: number) => void;
  removeItem: (movieId: number) => void;
  setItems: (items: UseShoppingCartStoreState["items"]) => void;
  clearItems: () => void;
};

export type UseShoppingCartStore = UseShoppingCartStoreState &
  UseShoppingCartStoreActions;
