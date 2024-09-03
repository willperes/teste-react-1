import { useBreakpoints } from "@/hooks";
import { Icon } from "../icon/icon";
import * as S from "./header.styles";
import { useMemo } from "react";
import { useHeader } from "./use-header";

type Props = {
  cartItemQuantityNumber: number;
};

export function Header({ cartItemQuantityNumber }: Props) {
  const { navigateToCartPage, navigateToMovieList } = useHeader();

  const { mdUp } = useBreakpoints();

  const cartQuantityText = useMemo(() => {
    if (cartItemQuantityNumber === 1) {
      return "1 item";
    }

    return `${cartItemQuantityNumber} itens`;
  }, [cartItemQuantityNumber]);

  return (
    <S.Container>
      <S.Content>
        <button
          aria-roledescription={"Ir para a página inicial"}
          onClick={navigateToMovieList}
        >
          <S.CompanyName>WeMovies</S.CompanyName>
        </button>
        <S.ShoppingCartButton
          aria-roledescription={"Abrir o carrinho de compras"}
          onClick={navigateToCartPage}
        >
          <S.ShoppingCartTextBox>
            {mdUp ? (
              <S.ShoppingCartTitle>Meu Carrinho</S.ShoppingCartTitle>
            ) : null}
            <S.ShoppingCartQuantity>{cartQuantityText}</S.ShoppingCartQuantity>
          </S.ShoppingCartTextBox>
          <S.ShoppingBagBox>
            <Icon
              name={"shoppingBagIcon"}
              size={24}
              fillColor={"backgroundContrast"}
            />
          </S.ShoppingBagBox>
        </S.ShoppingCartButton>
      </S.Content>
    </S.Container>
  );
}
