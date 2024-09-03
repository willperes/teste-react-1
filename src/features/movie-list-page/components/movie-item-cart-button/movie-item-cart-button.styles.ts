import styled from "styled-components";

export const CartQuantityBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s4}px;
`;

export const CartQuantityText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.buttonTextPrimary};
`;
