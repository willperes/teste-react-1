import { ButtonHTMLAttributes } from "react";
import * as S from "./base-button.styles";
import { colors } from "@/theme";

export type BaseButtonProps = {
  preset?: ButtonPreset;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BaseButton({
  children,
  preset = "blue",
  style,
  ...buttonProps
}: React.PropsWithChildren<BaseButtonProps>) {
  const buttonPreset = BUTTON_PRESETS[preset];
  return (
    <S.ButtonContainer style={{ ...style, ...buttonPreset }} {...buttonProps}>
      {children}
    </S.ButtonContainer>
  );
}

type ButtonPreset = "blue" | "green";

const BUTTON_PRESETS: Record<ButtonPreset, React.CSSProperties> = {
  blue: {
    backgroundColor: colors.buttonBlue,
  },
  green: {
    backgroundColor: colors.buttonGreen,
  },
};

type ButtonTitleSize = "md" | "lg";

export type ButtonTitleProps = {
  title: string;
  textSize?: ButtonTitleSize;
};

BaseButton.Title = function ButtonText({
  title,
  textSize = "md",
}: ButtonTitleProps) {
  return (
    <S.ButtonTitle style={{ fontSize: BUTTON_TITLE_SIZES[textSize] }}>
      {title}
    </S.ButtonTitle>
  );
};

const BUTTON_TITLE_SIZES: Record<ButtonTitleSize, string> = {
  md: "0.75rem",
  lg: "0.875rem",
};
