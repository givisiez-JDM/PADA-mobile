import React, { useState } from 'react';
import {
  ButtonAvancar,
    ContainerEnviaremos,
    ImageIconLogoRedefinir,
    TextEnviaremos,
    TextEnviaremos1,
    TextRedefinir,
} from './redefinirSenha-style';
import logo from '../../assets/logo.png';

import Header from '../../components/header/header';
import FooterCurto from '../../components/footer/footer';
import { useNavigation } from "@react-navigation/native";
import { ContainerFooterBottom, ContainerSafe, ImageIconLogo, Scroll } from '../login/login-style';
import { ContainerTelaPrincipal } from '../telaPrincipal/telaPrincipal-style';
import ButtonEmailSenha from '../../components/buttonEmailSenha/buttonEmailSenha';
import InputGeral from '../../components/inputGeral/inputGeral';
import { TextButton } from '../cadastro/cadastro-style';
import { propsStack } from '../../routes/Stack/Models';
import { Platform } from 'react-native';

const RedefinirSenha = () => {

  const navigation = useNavigation<propsStack>();

    return (
      <ContainerSafe behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Scroll>
        <ContainerTelaPrincipal>
            <Header back={true} />
            <ImageIconLogoRedefinir source={logo} />
            <TextRedefinir>Redefinir senha</TextRedefinir>
            <ContainerEnviaremos>
                <TextEnviaremos>
                    Enviaremos um código de 6 dígitos{' '}
                </TextEnviaremos>
                <TextEnviaremos1>para você no seu e-mail.</TextEnviaremos1>
            </ContainerEnviaremos>

          <InputGeral/>

          <ButtonAvancar>
          <TextButton>Avançar</TextButton>
          </ButtonAvancar>
        
            <ContainerFooterBottom>
                <FooterCurto />
            </ContainerFooterBottom>
        </ContainerTelaPrincipal>
        </Scroll>
    </ContainerSafe>
    );
};

export default RedefinirSenha;
