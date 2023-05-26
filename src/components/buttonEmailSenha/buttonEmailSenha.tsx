
import { ButtonEmailSenhaContainer, ButtonImageIcon, ImageLogo, TextButton } from './buttonEmailSenha-style';
import React from 'react';
import {
  Image,
  TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';

import logoEmail from "../../assets/logoEmail.png"
import { ImageSource } from 'react-native-vector-icons/Icon';

function ButtonEmailSenha(props: {labelButton:String, imageButton:ImageSource}){
  const navigation = useNavigation<propsStack>()
  return (
    
    <TouchableOpacity>
    <ButtonEmailSenhaContainer>       
                
             <ButtonImageIcon>
              <ImageLogo>
                <Image  source={props.imageButton} ></Image>
              </ImageLogo>
              
              </ButtonImageIcon> 
              <TextButton>{props.labelButton}</TextButton>        
    </ButtonEmailSenhaContainer>
    </TouchableOpacity>
  )};




export default ButtonEmailSenha