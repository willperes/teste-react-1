import { useShoppingCartStore } from "@/domain";
import { Header } from "../header/header";
import * as S from "./page-box.styles";

type Props = {
  contentStyle?: React.CSSProperties;
};

export function PageBox({
  children,
  contentStyle,
}: React.PropsWithChildren<Props>) {
  const { items } = useShoppingCartStore();

  return (
    <>
      <Header cartItemQuantityNumber={items.length} />
      <S.MainBox style={contentStyle}>{children}</S.MainBox>
    </>
  );
}
