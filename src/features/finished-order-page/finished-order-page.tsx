import { Button, PageBox } from "@/components";
import * as S from "./finished-order-page.styles";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/routes";
import { FinishedOrderImage } from "@/assets";
import { useBreakpoints } from "@/hooks";

export function FinishedOrderPage() {
  const { mdUp } = useBreakpoints();
  const navigate = useNavigate();

  function navigateToMovieList() {
    navigate(RoutePath.MovieListPage, { replace: true });
  }

  return (
    <PageBox>
      <S.Container>
        <S.EmptyStateTitle>Compra realizada com sucesso!</S.EmptyStateTitle>

        <FinishedOrderImage height={mdUp ? 307 : 248} />

        <Button
          title={"VOLTAR"}
          textSize={"md"}
          style={{ width: 173 }}
          onClick={navigateToMovieList}
        />
      </S.Container>
    </PageBox>
  );
}
