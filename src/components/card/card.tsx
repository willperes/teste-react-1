import styled from "styled-components";

type Props = React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, ...props }: React.PropsWithChildren<Props>) {
  return <_Card {...props}>{children}</_Card>;
}

const _Card = styled.div`
  padding: ${({ theme }) => theme.spacings.s16}px;
  background-color: ${({ theme }) => theme.colors.cardBackground};

  border-radius: ${({ theme }) => theme.borderRadii.s4}px;

  display: flex;
  flex-direction: column;
`;
