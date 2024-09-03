import { breakpointValue } from "@/theme";
import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacings.s21}px;

  @media screen and (min-width: ${breakpointValue.md}) {
    gap: ${({ theme }) => theme.spacings.s24}px;
  }
`;
