import { Movie, useShoppingCartStoreActions } from "@/domain";
import * as S from "./movie-item.styles";
import { MovieItemCartButton } from "../movie-item-cart-button/movie-item-cart-button";
import { Card, MovieImage, MovieName, MoviePrice } from "@/components";

type Props = {
  movie: Movie;
};

export function MovieItem({ movie }: Props) {
  const { getMovieQuantity, changeQuantity } = useShoppingCartStoreActions();

  return (
    <Card>
      <S.Container>
        <MovieImage
          imageURL={movie.imageURL}
          movieName={movie.title}
          height={188}
        />

        <MovieName name={movie.title} size={"md"} />

        <MoviePrice price={movie.price} />

        <MovieItemCartButton
          quantityInCart={getMovieQuantity(movie.id)}
          increaseCartQuantity={() =>
            changeQuantity(movie, getMovieQuantity(movie.id) + 1)
          }
        />
      </S.Container>
    </Card>
  );
}
