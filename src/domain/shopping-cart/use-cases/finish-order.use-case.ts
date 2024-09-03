import { To } from "react-router-dom";
import { RoutePath } from "@/routes";

export interface FinishOrderUseCase {
  execute: (clearCartFn: () => void, navigateFn: (to: To) => void) => void;
}

export class FinishOrderUseCaseImpl implements FinishOrderUseCase {
  execute = (clearCartFn: () => void, navigateFn: (to: To) => void) => {
    clearCartFn();
    navigateFn(RoutePath.FinishedOrderPage);
  };
}
