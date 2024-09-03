import { EmptyState } from "@/components";
import { useNavigate } from "react-router-dom";

export function MovieListEmptyState() {
  const navigate = useNavigate();

  function handleRefreshPage() {
    navigate(0);
  }

  return (
    <EmptyState
      message={"Parece que não há nada por aqui :("}
      buttonTitle={"Recarregar página"}
      buttonPressFn={handleRefreshPage}
    />
  );
}
