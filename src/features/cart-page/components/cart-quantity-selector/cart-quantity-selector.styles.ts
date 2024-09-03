import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: ${({ theme }) => theme.spacings.s10}px;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  height: 26px;
  width: 62px;

  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadii.s4}px;

  color: ${({ theme }) => theme.colors.cardTextSecondary};
  text-align: center;
`;

export const IconButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1px;
`;
