import { Grid } from "../../cart-page.styles";
import * as S from "./cart-header.styles";

export function CartHeader() {
  return (
    <Grid>
      <S.ColumnTitle>PRODUTO</S.ColumnTitle>
      <S.ColumnTitle>QTD</S.ColumnTitle>
      <S.ColumnTitle>SUBTOTAL</S.ColumnTitle>
      <S.ColumnPlaceholder />
    </Grid>
  );
}
