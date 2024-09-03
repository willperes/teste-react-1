import { colors } from "./colors";
import { spacings } from "./spacings";

export const theme = {
  colors,
  contentMaxWidth: 1080,
  spacings,
  borderRadii: {
    s4: 4,
  },
};

export type ThemeColor = keyof (typeof theme)["colors"];
