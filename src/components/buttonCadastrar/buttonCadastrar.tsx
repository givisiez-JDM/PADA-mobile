
import { ButtonCadastrarContainer, ButtonImageIcon, TextButton } from './buttonCadastrar-style';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity, View,
} from 'react-native';
import logoMedico from "../../assets/logoMedico.png"


function ButtonDoctor(){
  return (
    
    <TouchableOpacity>
    <ButtonCadastrarContainer>       
          <TextButton>Cadastre- se</TextButton>
    </ButtonCadastrarContainer>
    </TouchableOpacity>
  )};




export default ButtonDoctor