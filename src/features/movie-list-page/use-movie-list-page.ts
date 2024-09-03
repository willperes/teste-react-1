import { useFetch } from "@/hooks";
import { GetMovieListUseCase } from "../../domain/movie/use-cases/get-movie-list.use-case";

type Props = {
  getMovieListUseCase: GetMovieListUseCase;
};

export function useMovieListPage({ getMovieListUseCase }: Props) {
  const { data: movies, loading } = useFetch({
    fetchFn: getMovieListUseCase.execute,
  });

  return {
    movieList: movies ?? [],
    isLoading: loading,
    shouldDisplayEmptyState: !movies?.length && !loading,
  };
}
