import { Button } from "@/components";
import * as S from "./empty-state.styles";
import { ReloadPageImage } from "@/assets";

type Props = {
  message: string;
  buttonTitle: string;
  buttonPressFn: () => void;
};

export function EmptyState({ message, buttonTitle, buttonPressFn }: Props) {
  return (
    <S.Container>
      <S.EmptyStateTitle>{message}</S.EmptyStateTitle>

      <ReloadPageImage />

      <Button
        title={buttonTitle}
        textSize={"md"}
        style={{ width: 173 }}
        onClick={buttonPressFn}
      />
    </S.Container>
  );
}
