
import { ButtonDoctorContainer, ButtonImageIcon, TextButton } from './buttonDoctor-style';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity, View,
} from 'react-native';
import logoMedico from "../../assets/logoMedico.png"


function ButtonDoctor( prop: {labelButton: string,imageButton: ImageSourcePropType }){
  return (
    
    <TouchableOpacity>
    <ButtonDoctorContainer> 
      <ButtonImageIcon>
        <Image source={prop.imageButton}></Image>
        </ButtonImageIcon>     
          
          <TextButton>{prop.labelButton}</TextButton>
    </ButtonDoctorContainer>
    </TouchableOpacity>
  )};




export default ButtonDoctor