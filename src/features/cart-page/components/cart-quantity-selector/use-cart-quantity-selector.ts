import { Movie, useShoppingCartStoreActions } from "@/domain";
import { useState } from "react";

type Props = {
  movie: Movie;
  currentQuantity: number;
};

export function useCartQuantitySelector({ movie, currentQuantity }: Props) {
  const [currentValue, setCurrentValue] = useState(currentQuantity.toString());
  const { changeQuantity, getMovieQuantity } = useShoppingCartStoreActions();

  function handleQuantityChanged(value: string) {
    const numberOnlyValue = replaceAllButNumbersOnString(value);
    setCurrentValue(numberOnlyValue);

    if (numberOnlyValue) {
      changeQuantity(movie, parseInt(numberOnlyValue));
    }
  }

  function validateInputOnBlur() {
    const numberOnlyValue = replaceAllButNumbersOnString(currentValue);
    if (!numberOnlyValue) {
      changeQuantity(movie, 1);
      setCurrentValue("1");
    }
  }

  function handleDecreaseQuantity() {
    const _updatedQuantity = getMovieQuantity(movie.id) - 1;
    handleQuantityChanged(_updatedQuantity.toString());
  }

  function handleIncreaseQuantity() {
    const _updatedQuantity = getMovieQuantity(movie.id) + 1;
    handleQuantityChanged(_updatedQuantity.toString());
  }

  return {
    currentValue,
    handleQuantityChanged,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    validateInputOnBlur,
  };
}

function replaceAllButNumbersOnString(value: string) {
  return value.replace(/[^0-9]+/, "");
}
