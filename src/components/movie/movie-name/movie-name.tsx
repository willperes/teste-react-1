import styled from "styled-components";

type Props = {
  name: string;
  size: "md" | "lg";
};

export function MovieName({ name, size }: Props) {
  return (
    <_Name
      aria-roledescription="Título do filme"
      style={{ fontSize: FONT_SIZE[size] }}
    >
      {name}
    </_Name>
  );
}

const FONT_SIZE: Record<Props["size"], string> = {
  md: "0.75rem",
  lg: "0.875rem",
};

const _Name = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cardTextSecondary};
`;
