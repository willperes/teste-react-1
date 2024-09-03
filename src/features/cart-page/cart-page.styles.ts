import { Card } from "@/components";
import { breakpointValue } from "@/theme";
import styled from "styled-components";

export const Container = styled(Card)`
  gap: ${({ theme }) => theme.spacings.s21}px;

  @media screen and (min-width: ${breakpointValue.md}px) {
    gap: ${({ theme }) => theme.spacings.s24}px;
    padding: ${({ theme }) => theme.spacings.s24}px;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr auto;
`;
