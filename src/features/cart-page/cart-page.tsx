import { Divider, PageBox } from "@/components";
import * as S from "./cart-page.styles";
import { CartHeader } from "./components/cart-header/cart-header";
import { CartContent } from "./components/cart-content/cart-content";
import { useBreakpoints } from "@/hooks";
import { CartFooter } from "./components/cart-footer/cart-footer";
import { useShoppingCartStore } from "@/domain";
import { CartEmptyState } from "./components/cart-empty-state/cart-empty-state";

export function CartPage() {
  const { mdUp } = useBreakpoints();
  const { items } = useShoppingCartStore();

  if (!items.length) {
    return (
      <PageBox>
        <CartEmptyState />
      </PageBox>
    );
  }

  return (
    <PageBox>
      <S.Container>
        {mdUp ? <CartHeader /> : null}

        <CartContent />

        <Divider />

        <CartFooter />
      </S.Container>
    </PageBox>
  );
}
