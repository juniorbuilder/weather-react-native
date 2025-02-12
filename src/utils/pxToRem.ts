import { PixelRatio } from "react-native";

const BASE_FONT_SIZE = 16;

export const remToPx = (rem: number): number => {
  return PixelRatio.roundToNearestPixel(rem * BASE_FONT_SIZE);
};
