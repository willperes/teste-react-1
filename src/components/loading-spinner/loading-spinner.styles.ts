import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  margin-top: 40px;
  padding: 10px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  height: 62.25px;
  width: 62.25px;

  border: 3px solid #808080;
  border-top: 3px solid #e6e6e6;
  border-radius: 50%;

  animation: ${spin} 1s linear infinite;
`;
