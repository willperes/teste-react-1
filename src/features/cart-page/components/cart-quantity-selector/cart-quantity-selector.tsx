import { Movie } from "@/domain";
import * as S from "./cart-quantity-selector.styles";
import { useCartQuantitySelector } from "./use-cart-quantity-selector";
import { Icon, IconProps } from "@/components";

type Props = {
  movie: Movie;
  currentQuantity: number;
};

const ICON_SIZE = 18;
const ICON_FILL_COLOR: IconProps["fillColor"] = "buttonBlue";

export function CartQuantitySelector(props: Props) {
  const {
    currentValue,
    handleQuantityChanged,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    validateInputOnBlur,
  } = useCartQuantitySelector(props);

  return (
    <S.Container>
      <S.IconButtonWrapper
        style={{ color: "black" }}
        onClick={handleDecreaseQuantity}
        aria-roledescription={"Diminuir a quantidade do filme no carrinho"}
      >
        <Icon
          name={"minusRoundIcon"}
          size={ICON_SIZE}
          fillColor={ICON_FILL_COLOR}
        />
      </S.IconButtonWrapper>
      <S.Input
        value={currentValue}
        onChange={(event) => handleQuantityChanged(event.target.value)}
        onBlur={validateInputOnBlur}
        aria-roledescription={"Modificar a quantidade do filme no carrinho"}
      />
      <S.IconButtonWrapper
        style={{ color: "black" }}
        onClick={handleIncreaseQuantity}
        aria-roledescription={"Aumentar a quantidade do filme no carrinho"}
      >
        <Icon
          name={"plusRoundIcon"}
          size={ICON_SIZE}
          fillColor={ICON_FILL_COLOR}
        />
      </S.IconButtonWrapper>
    </S.Container>
  );
}
