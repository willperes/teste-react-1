import { BaseIconProps } from "@/components";

export function TrashIcon({ size = 20, fillColor = "black" }: BaseIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M4.28571 19C4.28571 20.1 5.44286 21 6.85714 21H17.1429C18.5571 21 19.7143 20.1 19.7143 19V7H4.28571V19ZM21 4H16.5L15.2143 3H8.78571L7.5 4H3V6H21V4Z"
        fill={fillColor}
      />
    </svg>
  );
}
