import styled from "styled-components";

export const ColumnTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.cardTextTertiary};
`;

export const ColumnPlaceholder = styled.div`
  height: 24px;
  width: 24px;
`;
