import { ButtonEmailSenhaContainer } from "./inputGeral-style";
import React from "react";
import { View } from "react-native";

const InputGeral = ({ inputtext }) => {
  return (
    <ButtonEmailSenhaContainer placeholder={inputtext} />
  );
};

export default InputGeral;
