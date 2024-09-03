import styled from "styled-components";

export const Container = styled.header`
  max-width: ${({ theme }) => theme.contentMaxWidth}px;
  width: 100%;

  height: 88px;
`;

export const Content = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 0px ${({ theme }) => theme.spacings.screenPadding}px 0px
    ${({ theme }) => theme.spacings.screenPadding}px;
`;

export const CompanyName = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const ShoppingCartButton = styled.button`
  display: flex;
  align-items: center;

  gap: 8px;
`;

export const ShoppingCartTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const ShoppingCartTitle = styled.strong`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ShoppingCartQuantity = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ShoppingBagBox = styled.div`
  height: 40px;
  width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
