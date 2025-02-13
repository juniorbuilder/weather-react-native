import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { remToPx } from "../../utils/pxToRem";
import { Image } from "react-native";

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
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const GroupIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Row = styled.View`
  justify-content: space-between;
`;

export const Icon = styled(Image)`
  width: 130px;
  height: 130px;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`
  gap: 70px;
`;

export const GroupText = styled.View`
  flex-direction: column;
  gap: 8px;
`;
