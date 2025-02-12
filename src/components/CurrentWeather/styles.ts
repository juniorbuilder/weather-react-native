import styled from "styled-components/native";
import { remToPx } from "../../utils/pxToRem";
import { Image } from "react-native";

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const CurrentBox = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Temperature = styled.Text`
  font-size: ${remToPx(4.5)}px;
  font-weight: 600;
  line-height: 108px;
  color: ${({ theme }) => theme.colors.text};
`;

export const City = styled.Text`
  font-size: ${remToPx(1.7)}px;
  font-weight: 600;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Weather = styled.Text`
  flex-direction: row;
  font-size: ${remToPx(1)}px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Image)`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View``;

export const DaysBox = styled.View`
  margin-top: ${remToPx(5)}px;
  gap: 16px;
`;
export const InfoBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.text};
`;

export const InfoTitle = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.off};
`;
