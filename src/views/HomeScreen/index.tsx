import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  GroupIcons,
  GroupText,
  Icon,
  Row,
  Subtitle,
  Title,
} from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { storage } from "../../storage";

type LoginScreenNavigationProp = StackNavigationProp<Route, "Forecast">;
const HomeScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  useEffect(() => {
    const user = storage.getBoolean("auth");
    if (!user) {
      navigation.navigate("Login");
    }
  }, []);

  const nextPage = () => {
    navigation.navigate("Forecast");
  };

  return (
    <Container>
      <GroupIcons>
        <Row>
          <Icon source={require("../../assets/Snow.png")} />
          <Icon source={require("../../assets/Snow.png")} />
        </Row>
        <Row>
          <Icon source={require("../../assets/Snow.png")} />
          <Icon source={require("../../assets/Snow.png")} />
        </Row>
      </GroupIcons>
      <Box>
        <GroupText>
          <Title>Meu clima app</Title>
          <Subtitle>
            Verifique as atualizações meteorológicas ao vivo em todo o mundo com
            apenas um toque
          </Subtitle>
        </GroupText>
        <Button onPress={() => nextPage()} text="Iniciar" />
      </Box>
    </Container>
  );
};

export default HomeScreen;
