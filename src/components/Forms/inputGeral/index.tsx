import { ButtonEmailSenhaContainer } from "./style";
import React from "react";
import { View } from "react-native";

interface Props {
  inputtext: string;
}

const InputGeral: React.FC<Props> = ({ inputtext }) => {
  return (
    <ButtonEmailSenhaContainer placeholder={inputtext} />
  );
};

export default InputGeral;
