import {
  FinishOrderUseCase,
  useShoppingCartStore,
  useShoppingCartStoreActions,
} from "@/domain";
import { useNavigate } from "react-router-dom";

type Props = {
  finishOrderUseCase: FinishOrderUseCase;
};

export function useCartFooter({ finishOrderUseCase }: Props) {
  const navigate = useNavigate();
  const { items } = useShoppingCartStore();
  const { clearItems } = useShoppingCartStoreActions();

  function handleFinishOrder() {
    finishOrderUseCase.execute(clearItems, navigate);
  }

  return {
    items,
    handleFinishOrder,
  };
}
