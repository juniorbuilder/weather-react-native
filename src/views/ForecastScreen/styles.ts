import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { remToPx } from "../../utils/pxToRem";

export const Container = styled(LinearGradient).attrs((props) => ({
  colors: [props.theme.colors.primary, props.theme.colors.secondary],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  display: flex;
  height: 100%;
  padding-top: 140px;
  padding-bottom: 36px;
  justify-content: space-between;
  padding-right: ${remToPx(1.5)}px;
  padding-left: ${remToPx(1.5)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;
