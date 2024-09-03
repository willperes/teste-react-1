import {
  BaseButton,
  BaseButtonProps,
  ButtonTitleProps,
} from "./base-button/base-button";

type ButtonProps = BaseButtonProps & ButtonTitleProps;

export function Button({ title, textSize, ...buttonProps }: ButtonProps) {
  return (
    <BaseButton {...buttonProps}>
      <BaseButton.Title title={title} textSize={textSize} />
    </BaseButton>
  );
}
