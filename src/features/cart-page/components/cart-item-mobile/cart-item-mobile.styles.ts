import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacings.s16}px;
`;

export const ItemInformationContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.s16}px;
`;

export const MovieInformationBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UnitPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.s16}px;
`;

export const QuantityInformationBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.s16}px;
`;

export const SubtotalText = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cardTextTertiary};
`;
