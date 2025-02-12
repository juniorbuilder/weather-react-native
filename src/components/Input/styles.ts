import styled from "styled-components/native";
import { remToPx } from "../../utils/pxToRem";
import { Image } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 18px;
  padding: ${remToPx(0.5)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.placeholder,
}))`
  flex: 1;
  height: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const IconBox = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 28px;
  height: 28px;
`;
