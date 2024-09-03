import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadii.s4}px;
`;

export const ButtonTitle = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.buttonTextPrimary};
  text-align: center;
`;
