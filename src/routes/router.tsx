import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RoutePath } from "./route-path";
import { CartPage, FinishedOrderPage, MovieListPage } from "@/features";

const router = createBrowserRouter([
  {
    path: RoutePath.MovieListPage,
    element: <MovieListPage />,
  },
  {
    path: RoutePath.CartPage,
    element: <CartPage />,
  },
  {
    path: RoutePath.FinishedOrderPage,
    element: <FinishedOrderPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
