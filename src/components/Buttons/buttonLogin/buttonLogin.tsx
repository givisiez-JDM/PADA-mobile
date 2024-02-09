
import { ButtonLoginContainer, TextButton } from './buttonLogin-style';
import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { propsStack } from '../../../routes/Stack/Models';

function ButtonLogin() {
  const navigation = useNavigation<propsStack>()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Login", { name: "Login" })}>
      <ButtonLoginContainer>
        <TextButton>Login</TextButton>
      </ButtonLoginContainer>
    </TouchableOpacity>
  )
};

export default ButtonLogin