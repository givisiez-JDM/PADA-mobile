import {
  ContainerTagFluxo,
  ImageTagFluxo,
  TextFlagFluxo,
  TitleTagFluxo,
} from "./tag-fluxo-style";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import React from "react";
import { ImageSource } from "react-native-vector-icons/Icon";

const TagFluxo = (props: {
  title: string;
  text: string;
  imageTag: ImageSource;
}) => {
  const navigation = useNavigation<propsStack>();

  const navigateScreens = () => {
    if (props.title === "Meu perfil") {
      navigation.navigate("Paciente");
    }
    if (props.title === "Profissional de saúde") {
      navigation.navigate("ProfissionalResponsavel");
    }
    if (props.title === "Minhas vacinas") {
      navigation.navigate("MyVaccines");
    }
  };

  return (
    <ContainerTagFluxo onPress={navigateScreens}>
      <ImageTagFluxo>
        <Image source={props.imageTag} />
      </ImageTagFluxo>
      <TitleTagFluxo>{props.title}</TitleTagFluxo>
      <TextFlagFluxo>{props.text}</TextFlagFluxo>
    </ContainerTagFluxo>
  );
};

export default TagFluxo;
