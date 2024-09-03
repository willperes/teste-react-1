import { Icon } from "@/components";
import { useShoppingCartStoreActions } from "@/domain";

type Props = {
  movieId: number;
};

export function CartRemovalButton({ movieId }: Props) {
  const { removeItem } = useShoppingCartStoreActions();

  return (
    <button
      onClick={() => removeItem(movieId)}
      aria-roledescription={"Remover filme do carrinho"}
    >
      <Icon name={"trashIcon"} size={24} fillColor={"buttonBlue"} />
    </button>
  );
}
