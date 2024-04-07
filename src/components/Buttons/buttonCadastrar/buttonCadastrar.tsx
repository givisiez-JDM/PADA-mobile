import { ButtonCadastrarContainer, TextButton } from "./buttonCadastrar-style";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../../routes/Stack/Models";
import { ButtonBlueContainer, TextBlueButton } from "../bluebutton/blueButton-style";

function ButtonDoctor(props: { buttonText: string }) {
  const navigation = useNavigation<propsStack>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
      <ButtonBlueContainer>
        <TextBlueButton>{props.buttonText}</TextBlueButton>
      </ButtonBlueContainer>
    </TouchableOpacity>
  );
}

export default ButtonDoctor;
