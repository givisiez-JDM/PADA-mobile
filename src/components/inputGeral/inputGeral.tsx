import {
  ButtonEmailSenhaContainer,
} from "./inputGeral-style";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import { ImageSource } from "react-native-vector-icons/Icon";



const InputGeral = () => {

  return (
    <View>     
      <ButtonEmailSenhaContainer>

        <TextInput
        placeholder='E-mail'
        >

        </TextInput>
        
      </ButtonEmailSenhaContainer>  
  

    </View>
  );

}



export default InputGeral;
