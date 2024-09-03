import { useShoppingCartStore } from "@/domain";
import { useBreakpoints } from "@/hooks";
import { CartItemDesktop } from "../cart-item-desktop/cart-item-desktop";
import * as S from "./cart-content.styles";
import { CartItemMobile } from "../cart-item-mobile/cart-item-mobile";

export function CartContent() {
  const { items: cartItems } = useShoppingCartStore();

  const { mdUp } = useBreakpoints();

  return (
    <S.Container>
      {cartItems.map((item) => (
        <li key={item.movie.id}>
          {mdUp ? (
            <CartItemDesktop item={item} />
          ) : (
            <CartItemMobile item={item} />
          )}
        </li>
      ))}
    </S.Container>
  );
}
