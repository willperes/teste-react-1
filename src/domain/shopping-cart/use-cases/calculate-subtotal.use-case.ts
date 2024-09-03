export interface CalculateSubtotalUseCase {
  execute: (unitPrice: number, quantity: number) => number;
}

export class CalculateSubtotalUseCaseImpl implements CalculateSubtotalUseCase {
  execute(unitPrice: number, quantity: number): number {
    return unitPrice * quantity;
  }
}
