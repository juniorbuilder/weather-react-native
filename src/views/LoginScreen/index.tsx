import React from "react";
import { Box, Container, Forgot, Form, Subtitle, Title } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Forecast: undefined
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const onHandleEmail = (e) => {
    console.log(e);
  };
  const onHandlePassword = (e) => {
    console.log(e);
  };

  const checkLogin = () => {
    navigation.navigate("Forecast");
  };

  return (
    <Container>
      <Box>
        <Title>Entrar</Title>
        <Subtitle>Insira os detalhes da sua conta para fazer login.</Subtitle>
      </Box>
      <Box>
        <Form>
          <Input
            placeholder="stephen@gmail.com"
            onTextChange={(e) => onHandleEmail(e)}
          />

          <Input
            placeholder="*********"
            onTextChange={(e) => onHandlePassword(e)}
            type="password"
          />
        </Form>
        <Forgot>
          <Subtitle>Esqueci a senha</Subtitle>
        </Forgot>
      </Box>
      <Box>
        <Button text="Entrar" onPress={checkLogin} />
      </Box>
    </Container>
  );
};

export default LoginScreen;
