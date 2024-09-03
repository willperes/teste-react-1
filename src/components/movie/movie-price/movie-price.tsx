import { formatCurrency } from "@/utils";
import styled from "styled-components";

type MoviePriceSize = "md" | "xl";

type Props = {
  price: number;
  size?: MoviePriceSize;
};

export function MoviePrice({ price, size = "md" }: Props) {
  return (
    <_Price
      aria-roledescription="Preço do filme"
      style={{ fontSize: FONT_SIZE[size] }}
    >
      {formatCurrency(price)}
    </_Price>
  );
}

const _Price = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cardTextSecondary};
`;

const FONT_SIZE: Record<MoviePriceSize, string> = {
  md: "1rem",
  xl: "1.5rem",
};
