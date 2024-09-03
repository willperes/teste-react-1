import { EmptyState } from "@/components";
import { RoutePath } from "@/routes";
import { useNavigate } from "react-router-dom";

export function CartEmptyState() {
  const navigate = useNavigate();

  function navigateToMovieList() {
    navigate(RoutePath.MovieListPage);
  }

  return (
    <EmptyState
      message={"Você não possui nenhum item no seu carrinho :("}
      buttonTitle={"Voltar para a tela inicial"}
      buttonPressFn={navigateToMovieList}
    />
  );
}
