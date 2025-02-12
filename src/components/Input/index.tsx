import React, { useState } from "react";
import { Container, Icon, IconBox, TextInput } from "./styles";

interface InputProps {
  placeholder: string;
  onTextChange: (text: string) => void;
  type?: "numeric" | "default" | "email" | "password";
  secureTextEntry?: boolean;
}
const Input = ({ onTextChange, placeholder, type }: InputProps) => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const handleChangeText = (newText) => {
    setText(newText);
    onTextChange(newText);
  };

  if (type === "password") {
    return (
      <Container>
        <TextInput
          placeholder={placeholder}
          onChangeText={handleChangeText}
          value={text}
          keyboardType={"default"}
          secureTextEntry={!visible}
        />
        <IconBox onPress={() => setVisible(!visible)}>
          {visible ? (
            <Icon source={require("../../assets/close-eye.png")} />
          ) : (
            <Icon source={require("../../assets/open-eye.png")} />
          )}
        </IconBox>
      </Container>
    );
  }

  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={text}
        keyboardType={type}
      />
    </Container>
  );
};

export default Input;
