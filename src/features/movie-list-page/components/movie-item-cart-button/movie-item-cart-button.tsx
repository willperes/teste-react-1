import { Icon, IconButton } from "@/components";
import * as S from "./movie-item-cart-button.styles";
import { useMemo } from "react";

type Props = {
  quantityInCart: number;
  increaseCartQuantity: () => void;
};

export function MovieItemCartButton({
  quantityInCart,
  increaseCartQuantity,
}: Props) {
  const isInCart = useMemo(() => {
    return quantityInCart > 0;
  }, [quantityInCart]);

  function CartAmountComponent() {
    return (
      <S.CartQuantityBox>
        <Icon
          name={"shoppingCartIcon"}
          size={13.6}
          fillColor={"buttonTextPrimary"}
        />
        <S.CartQuantityText>{quantityInCart}</S.CartQuantityText>
      </S.CartQuantityBox>
    );
  }

  return (
    <IconButton
      title={"ADICIONAR AO CARRINHO"}
      leftComponent={<CartAmountComponent />}
      preset={isInCart ? "green" : "blue"}
      onClick={increaseCartQuantity}
    />
  );
}
