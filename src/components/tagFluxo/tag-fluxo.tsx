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
import { TextCard, TitleCard } from "@/src/theme/textColor/styletextColor";

const TagFluxo = (props: {
  title: string;
  text: string;
  imageTag: ImageSource;
}) => {
  const navigation = useNavigation<propsStack>();

  const navigateScreens = () => {
    if (props.title === "Meu perfil") {
      navigation.navigate("Profile");
    }
    if (props.title === "Profissional de saúde") {
      navigation.navigate("Doctor");
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
      <TitleCard>{props.title}</TitleCard>
      <TextCard>{props.text}</TextCard>
    </ContainerTagFluxo>
  );
};

export default TagFluxo;
