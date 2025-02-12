import styled from "styled-components/native";
import { remToPx } from "../../utils/pxToRem";
import { Image } from "react-native";

export const Container = styled.View`
  background-color: transparent;
  height: 80px;
  padding: ${remToPx(0.5)}px ${remToPx(1.5)}px;
  /* align-items: center; */
  justify-content: center;
`;

export const Button = styled.TouchableOpacity``;

export const Icon = styled(Image)`
  height: 30px;
  width: 30px;
`;
