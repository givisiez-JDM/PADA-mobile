import {
  ContainerTagFluxo,
  ImageTagFluxo,
  TextFlagFluxo,
  TitleTagFluxo,
} from "./tag-fluxo-style";
import { ImageSource } from "react-native-vector-icons/Icon";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

const TagFluxo = (props: {
  title: string;
  text: string;
  imageTag: ImageSource;
}) => {
  const navigation = useNavigation<propsStack>();

  const navigateScreens = () => {
    if (props.title === "Pacientes") {
      navigation.navigate("ListaPacientes");
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
