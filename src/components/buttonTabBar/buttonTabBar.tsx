import React from 'react';
import {
    ContainerTabBar,
    ButtonTabBarHome,
    ButtonTabBarLogout,
    TextButtonTabBarInicio,
    TextButtonTabBarLogout,
} from '../buttonTabBar/buttonTabBar-style';
import { ImageSource } from 'react-native-vector-icons/Icon';
import {
    ImageLogo,
    TextButton,
} from '../buttonEmailSenha/buttonEmailSenha-style';
import { Image, TouchableOpacity } from 'react-native';
import home from '../../assets/home.png';
import Logout from '../../assets/logOut.png';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';

const TabBar = () => {
    const navigation = useNavigation<propsStack>();

    return (
        <ContainerTabBar>
            <ButtonTabBarHome>
                <TouchableOpacity
                    onPress={() => navigation.navigate('TelaPrincipal')}
                >
                    <ImageLogo>
                        <Image source={home}></Image>
                    </ImageLogo>
                    <TextButtonTabBarInicio>{'Início'}</TextButtonTabBarInicio>
                </TouchableOpacity>
            </ButtonTabBarHome>

            <ButtonTabBarLogout>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <ImageLogo>
                        <Image source={Logout}></Image>
                    </ImageLogo>
                    <TextButtonTabBarLogout>{'Sair'}</TextButtonTabBarLogout>
                </TouchableOpacity>
            </ButtonTabBarLogout>
        </ContainerTabBar>
    );
};

export default TabBar;
