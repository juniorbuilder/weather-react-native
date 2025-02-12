import { View, Text } from "react-native";
import React from "react";
import { Button, Container, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Icon source={require("../../assets/Arrow-Left.png")} />
      </Button>
    </Container>
  );
};

export default CustomHeader;
