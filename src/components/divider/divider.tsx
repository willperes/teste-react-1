import { ThemeColor } from "@/theme";
import styled, { useTheme } from "styled-components";

type Props = {
  color?: ThemeColor;
};

export function Divider({ color = "cardTextTertiary" }: Props) {
  const { colors } = useTheme();

  return <_Divider style={{ backgroundColor: colors[color] }} />;
}

const _Divider = styled.div`
  height: 1px;
  width: 100%;
`;
