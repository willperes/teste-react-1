import styled from "styled-components";

export const MovieDetailsBox = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: ${({ theme }) => theme.spacings.s16}px;
`;

export const MovieInformationBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: ${({ theme }) => theme.spacings.s8}px;
`;
