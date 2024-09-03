import { RoutePath } from "@/routes";
import { useNavigate } from "react-router-dom";

export function useHeader() {
  const navigate = useNavigate();

  function navigateToCartPage() {
    navigate(RoutePath.CartPage);
  }

  function navigateToMovieList() {
    navigate(RoutePath.MovieListPage);
  }

  return {
    navigateToCartPage,
    navigateToMovieList,
  };
}
