import { ShoppingCartItem } from "../models";
import {
  CalculateSubtotalUseCase,
  CalculateSubtotalUseCaseImpl,
} from "./calculate-subtotal.use-case";

export interface CalculateTotalUseCase {
  execute: (items: ShoppingCartItem[]) => number;
}

export class CalculateTotalUseCaseImpl implements CalculateTotalUseCase {
  constructor(
    private readonly calculateSubtotalUseCase: CalculateSubtotalUseCase = new CalculateSubtotalUseCaseImpl()
  ) {}

  execute = (items: ShoppingCartItem[]): number => {
    return items.reduce((acc, curr) => {
      return (
        acc +
        this.calculateSubtotalUseCase.execute(curr.movie.price, curr.quantity)
      );
    }, 0);
  };
}
