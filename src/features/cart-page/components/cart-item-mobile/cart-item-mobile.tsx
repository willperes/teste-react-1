import {
  CalculateSubtotalUseCase,
  CalculateSubtotalUseCaseImpl,
  ShoppingCartItem,
  useShoppingCartStoreActions,
} from "@/domain";
import * as S from "./cart-item-mobile.styles";
import { MovieImage, MovieName, MoviePrice } from "@/components";
import { CartRemovalButton } from "../cart-removal-button/cart-removal-button";
import { CartQuantitySelector } from "../cart-quantity-selector/cart-quantity-selector";

type Props = {
  item: ShoppingCartItem;
  calculateSubTotalUseCase?: CalculateSubtotalUseCase;
};

export function CartItemMobile({
  item,
  calculateSubTotalUseCase = new CalculateSubtotalUseCaseImpl(),
}: Props) {
  const { getMovieQuantity } = useShoppingCartStoreActions();

  return (
    <S.Container>
      <MovieImage
        height={82}
        imageURL={item.movie.imageURL}
        movieName={item.movie.title}
      />

      <S.ItemInformationContainer>
        <S.MovieInformationBox>
          <MovieName name={item.movie.title} size={"lg"} />

          <S.UnitPriceBox>
            <MoviePrice price={item.movie.price} />
            <CartRemovalButton movieId={item.movie.id} />
          </S.UnitPriceBox>
        </S.MovieInformationBox>

        <S.QuantityInformationBox>
          <CartQuantitySelector
            movie={item.movie}
            currentQuantity={getMovieQuantity(item.movie.id)}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <S.SubtotalText>SUBTOTAL</S.SubtotalText>
            <MoviePrice
              price={calculateSubTotalUseCase.execute(
                item.movie.price,
                item.quantity
              )}
            />
          </div>
        </S.QuantityInformationBox>
      </S.ItemInformationContainer>
    </S.Container>
  );
}
