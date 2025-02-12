import { Image } from "react-native";
import styled from "styled-components/native";
import { remToPx } from "../../utils/pxToRem";

export const Container = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const ScrollBox = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Box = styled.View`
  align-items: center;
  gap: 4px;
`;

export const Card = styled.View`
  width: 76px;
  height: 76px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Image)`
  height: 30px;
  width: 30px;
`;
