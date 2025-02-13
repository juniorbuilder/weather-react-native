import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { remToPx } from "../../utils/pxToRem";

export const Container = styled(LinearGradient).attrs((props) => ({
  colors: [props.theme.colors.primary, props.theme.colors.secondary],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  height: 100%;
  padding: ${remToPx(3.75)}px ${remToPx(1.5)}px;
  justify-content: space-between;
  position: relative;
`;

export const Box = styled.View``;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Forgot = styled.View`
  margin-top: 12px;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Popup = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.accent};
  height: 60px;
  width: 80%;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  justify-content: center;
  align-items: center;
  padding: 8px;
`;
