import React, { useEffect, useState } from "react";
import { Box, Container, Forgot, Form, Popup, Subtitle, Title } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { storage } from "../../storage";

type LoginScreenNavigationProp = StackNavigationProp<Route, "Login">;

const LoginScreen = () => {
  const user = {
    email: "junior@gmail.com",
    password: "junior1234",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const onHandleEmail = (e) => {
    setEmail(e);
  };
  const onHandlePassword = (e) => {
    setPassword(e);
  };

  const checkLogin = () => {
    if (email === "" || password === "") {
      setShowAlert(true);
      setAlert("Por favor preencha os campos de email e senha");
    } else if (email === user.email && password === user.password) {
      storage.set("auth", true);
      navigation.navigate("Home");
    } else {
      setShowAlert(true);
      setAlert("Email ou senha incorretos");
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);
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
      {showAlert && (
        <Popup>
          <Subtitle>{alert}</Subtitle>
        </Popup>
      )}
    </Container>
  );
};

export default LoginScreen;
