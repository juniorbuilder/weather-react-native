import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
