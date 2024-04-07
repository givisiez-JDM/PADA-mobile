import {
  ButtonEmailSenhaContainer,
  ButtonImageIcon,
  ImageLogo,
  TextInputButton,
} from "./buttonEmailSenha-style";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";

import { ImageSource } from "react-native-vector-icons/Icon";
import { ButtonBlueContainer } from "../bluebutton/blueButton-style";



function ButtonEmailSenha(props: {
  labelButton: String;
  imageButton: ImageSource;

}) {
  const navigation = useNavigation<propsStack>();
  return (
    <View>
      <ButtonBlueContainer>

        <ButtonImageIcon>
          <ImageLogo>
            <Image source={props.imageButton}></Image>
          </ImageLogo>
        </ButtonImageIcon>


        <TextInput
          placeholder='ola'
        >

        </TextInput>

      </ButtonBlueContainer>


    </View>
  );
}

export default ButtonEmailSenha;
