import {
  ButtonEmailSenhaContainer,
} from "./inputGeral-style";
import React from "react";
import {  TextInput, View } from "react-native";




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
