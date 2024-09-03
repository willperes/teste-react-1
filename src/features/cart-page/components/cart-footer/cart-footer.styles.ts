import { breakpointValue } from "@/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s16}px;

  @media screen and (min-width: ${breakpointValue.md}px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${breakpointValue.md}px) {
    justify-content: baseline;
    gap: ${({ theme }) => theme.spacings.s24}px;
  }
`;

export const TotalText = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cardTextTertiary};
`;

export const ButtonBox = styled.div`
  width: 100%;

  @media screen and (min-width: ${breakpointValue.md}px) {
    width: 173px;
  }
`;
