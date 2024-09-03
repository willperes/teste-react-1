import { Button, MoviePrice } from "@/components";
import * as S from "./cart-footer.styles";
import {
  CalculateTotalUseCase,
  CalculateTotalUseCaseImpl,
  FinishOrderUseCase,
  FinishOrderUseCaseImpl,
} from "@/domain";
import { useCartFooter } from "./use-cart-footer";

type Props = {
  calculateTotalUseCase?: CalculateTotalUseCase;
  finishOrderUseCase?: FinishOrderUseCase;
};

export function CartFooter({
  calculateTotalUseCase = new CalculateTotalUseCaseImpl(),
  finishOrderUseCase = new FinishOrderUseCaseImpl(),
}: Props) {
  const { items, handleFinishOrder } = useCartFooter({ finishOrderUseCase });

  return (
    <S.Container>
      <S.PriceBox>
        <S.TotalText>TOTAL</S.TotalText>

        <MoviePrice price={calculateTotalUseCase.execute(items)} />
      </S.PriceBox>

      <S.ButtonBox>
        <Button title={"FINALIZAR PEDIDO"} onClick={handleFinishOrder} />
      </S.ButtonBox>
    </S.Container>
  );
}
