import {
  ContainerTagFluxo,
  ImageTagFluxo,
  TextFlagFluxo,
  TitleTagFluxo,
} from "./tag-fluxo-style";
import { ImageSource } from "react-native-vector-icons/Icon";
import { Image } from "react-native";

const TagFluxo = (props: {
  title: string;
  text: string;
  imageTag: ImageSource;
}) => {
  return (
    <ContainerTagFluxo>
      <ImageTagFluxo>
        <Image source={props.imageTag} />
      </ImageTagFluxo>
      <TitleTagFluxo>{props.title}</TitleTagFluxo>
      <TextFlagFluxo>{props.text}</TextFlagFluxo>
    </ContainerTagFluxo>
  );
};

export default TagFluxo;