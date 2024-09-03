import { MovieImage, MovieName, MoviePrice } from "@/components";
import { Grid } from "../../cart-page.styles";
import {
  CalculateSubtotalUseCase,
  CalculateSubtotalUseCaseImpl,
  ShoppingCartItem,
} from "@/domain";
import * as S from "./cart-item-desktop.styles";
import { CartQuantitySelector } from "../cart-quantity-selector/cart-quantity-selector";
import { CartRemovalButton } from "../cart-removal-button/cart-removal-button";

type Props = {
  item: ShoppingCartItem;
  calculateSubTotalUseCase?: CalculateSubtotalUseCase;
};

export function CartItemDesktop({
  item,
  calculateSubTotalUseCase = new CalculateSubtotalUseCaseImpl(),
}: Props) {
  return (
    <Grid>
      <S.MovieDetailsBox>
        <MovieImage
          movieName={item.movie.title}
          imageURL={item.movie.imageURL}
          height={114}
        />
        <S.MovieInformationBox>
          <MovieName name={item.movie.title} size={"lg"} />
          <MoviePrice price={item.movie.price} />
        </S.MovieInformationBox>
      </S.MovieDetailsBox>
      <div>
        <CartQuantitySelector
          movie={item.movie}
          currentQuantity={item.quantity}
        />
      </div>
      <div>
        <MoviePrice
          price={calculateSubTotalUseCase.execute(
            item.movie.price,
            item.quantity
          )}
        />
      </div>
      <CartRemovalButton movieId={item.movie.id} />
    </Grid>
  );
}
