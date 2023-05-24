import {
  ButtonCadastrarContainer,
  ButtonImageIcon,
  TextButton,
} from "./buttonCadastrar-style";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from "react-native";
import logoMedico from "../../assets/logoMedico.png";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";

function ButtonDoctor() {
  const navigation = useNavigation<propsStack>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
      <ButtonCadastrarContainer>
        <TextButton>Cadastre- se</TextButton>
      </ButtonCadastrarContainer>
    </TouchableOpacity>
  );
}

export default ButtonDoctor;
