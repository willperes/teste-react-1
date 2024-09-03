import { GetMovieListUseCase, GetMovieListUseCaseImpl } from "@/domain";
import { useMovieListPage } from "./use-movie-list-page";
import { LoadingSpinner, PageBox } from "@/components";
import { MovieItem } from "./components/movie-item/movie-item";
import * as S from "./movie-list-page.styles";
import { MovieListEmptyState } from "./components/movie-list-empty-state/movie-list-empty-state";

type Props = {
  getMovieListUseCase?: GetMovieListUseCase;
};

export function MovieListPage({
  getMovieListUseCase = new GetMovieListUseCaseImpl(),
}: Props) {
  const { movieList, isLoading, shouldDisplayEmptyState } = useMovieListPage({
    getMovieListUseCase,
  });

  if (shouldDisplayEmptyState) {
    return (
      <PageBox>
        <MovieListEmptyState />
      </PageBox>
    );
  }

  return (
    <PageBox>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <S.Container>
          {movieList.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </S.Container>
      )}
    </PageBox>
  );
}
