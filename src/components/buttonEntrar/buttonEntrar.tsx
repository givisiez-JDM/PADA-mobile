import { ButtonLoginContainer, TextButton } from "./buttonEntrar-style";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";
import { validar } from "../../config/validates";

function ButtonEntrar(props: {
  mail: string;
  pass: string;
  setErrorMail: React.Dispatch<React.SetStateAction<string>>;
  setErrorPass: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigation = useNavigation<propsStack>();

  const mail = props.mail;
  const pass = props.pass;
  const setErrorMail = props.setErrorMail;
  const setErrorPass = props.setErrorPass;
  const Logar = () => {
    if (validar({ mail, pass }, { setErrorMail, setErrorPass })) {
      console.log("ok");
    }
  };

  return (
    <TouchableOpacity onPress={Logar}>
      <ButtonLoginContainer>
        <TextButton>Entrar</TextButton>
      </ButtonLoginContainer>
    </TouchableOpacity>
  );
}

export default ButtonEntrar;
