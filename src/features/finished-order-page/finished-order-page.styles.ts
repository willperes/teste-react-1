import { Card } from "@/components";
import styled from "styled-components";

export const Container = styled(Card)`
  flex: 1;

  display: flex;
  align-items: center;
  padding: 64px ${({ theme }) => theme.spacings.s16}px 64px
    ${({ theme }) => theme.spacings.s16}px;

  gap: ${({ theme }) => theme.spacings.s24}px;
`;

export const EmptyStateTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.cardTextSecondary};
  text-align: center;
`;
