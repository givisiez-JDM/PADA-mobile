import React, { Fragment, useState } from 'react';
import Header from '../../components/header/header';
import FooterCurto from '../../components/footer/footer';
import { useNavigation } from '@react-navigation/native';
import {
    ContainerSafe,
    Scroll,
} from '../login/login-style';
import { ContainerTelaPrincipal } from '../telaPrincipal/telaPrincipal-style';
import { TextButton } from '../cadastro/cadastro-style';
import { propsStack } from '../../routes/Stack/Models';
import { Platform, TextInput, View } from 'react-native';
import { ButtonContinuar, ContainerCrie, ImageFooterSenha, TextRecuperacao } from './recuperacaoSenha-style';
import {
    TextEnviaremos,
} from '../redefinirSenha/redefinirSenha-style';
import { ButtonEmailSenhaContainer } from '../../components/buttonEmailSenha/buttonEmailSenha-style';
import footerSenhaImg from "../../assets/footerSenha.png";
import { ContainerFooter } from '../../components/footerLongo/footerLongo-style';
import FooterLongo from '../../components/footerLongo/footerLongo';
import FooterSenha from '../../components/footerSenha/footerSenha';

const RecuperacaoSenha = () => {
    const navigation = useNavigation<propsStack>();

    return (
        <ContainerSafe behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Scroll>
                <ContainerTelaPrincipal>
                    <Header back={true} />

                    <TextRecuperacao>Recuperação de senha</TextRecuperacao>
                    <ContainerCrie>
                        <TextEnviaremos>
                            Crie sua nova senha abaixo
                        </TextEnviaremos>
                    </ContainerCrie>

                    <View>
                        <ButtonEmailSenhaContainer>
                            <TextInput placeholder="Nova senha"></TextInput>
                        </ButtonEmailSenhaContainer>
                    </View>

                    <View>
                        <ButtonEmailSenhaContainer>
                            <TextInput placeholder="Confirme sua senha"></TextInput>
                        </ButtonEmailSenhaContainer>
                    </View>

                    <ButtonContinuar>
                        <TextButton>Continuar</TextButton>
                    </ButtonContinuar>

          <FooterSenha/>
                     
                   
                </ContainerTelaPrincipal>
            </Scroll>
        </ContainerSafe>
    );
};

export default RecuperacaoSenha;
