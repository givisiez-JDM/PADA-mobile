import { ButtonLoginContainer, TextButton } from "./buttonEntrar-style";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";
import { validar } from "../../config/validates";
import { loginUser } from "../../service/requests";
import LoadingModal from "../loadingModal/loading-modal";

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
  const [loading, setLoading] = useState(false);

  const openLoading = () => {
    setLoading(true);
  };

  const closeLoading = () => {
    setLoading(false);
  };
  const Logar = () => {
    if (validar({ mail, pass }, { setErrorMail, setErrorPass })) {
      loginUser(mail, pass, openLoading, closeLoading, navigation);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={Logar}>
        <ButtonLoginContainer>
          <TextButton>Entrar</TextButton>
        </ButtonLoginContainer>
      </TouchableOpacity>
      <LoadingModal visible={loading} onClose={closeLoading} />
    </>
  );
}

export default ButtonEntrar;
