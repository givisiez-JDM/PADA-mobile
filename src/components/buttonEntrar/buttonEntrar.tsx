import { ButtonLoginContainer, TextButton } from './buttonEntrar-style';
import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { propsStack } from '../../routes/Stack/Models';

function ButtonEntrar(){
  const navigation = useNavigation<propsStack>()
  return (
    
    <TouchableOpacity onPress={() => navigation.navigate("TelaPrincipal")}>
    <ButtonLoginContainer>       
          <TextButton>Entrar</TextButton>
    </ButtonLoginContainer>
    </TouchableOpacity>
  )};



export default ButtonEntrar