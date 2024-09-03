import {
  BaseButton,
  BaseButtonProps,
  ButtonTitleProps,
} from "../base-button/base-button";

type IconButtonProps = {
  leftComponent?: React.ReactElement;
} & BaseButtonProps &
  ButtonTitleProps;

export function IconButton({
  leftComponent,
  title,
  textSize,
  ...buttonProps
}: IconButtonProps) {
  return (
    <BaseButton {...buttonProps} style={{ gap: 12 }}>
      {leftComponent ?? null}
      <BaseButton.Title title={title} textSize={textSize} />
    </BaseButton>
  );
}
