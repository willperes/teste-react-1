import {
  MinusRoundIcon,
  PlusRoundIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@/assets";
import { ThemeColor } from "@/theme";
import { useTheme } from "styled-components";

export type BaseIconProps = {
  size?: number;
  color?: string;
  fillColor?: string;
};

export interface IconProps {
  name: IconName;
  color?: ThemeColor;
  fillColor?: ThemeColor;
  size?: number;
}

export function Icon({
  name,
  color = "backgroundContrast",
  fillColor = "mainBackground",
  size,
}: IconProps) {
  const { colors } = useTheme();

  const SVGIcon = iconRegistry[name];
  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
    color: colors[color],
    fillColor: colors[fillColor],
  };

  return <SVGIcon {...iconProps} />;
}

const iconRegistry = {
  shoppingBagIcon: ShoppingBagIcon,
  shoppingCartIcon: ShoppingCartIcon,
  plusRoundIcon: PlusRoundIcon,
  minusRoundIcon: MinusRoundIcon,
  trashIcon: TrashIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
