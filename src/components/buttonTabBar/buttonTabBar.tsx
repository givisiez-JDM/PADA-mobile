import React from 'react';
import {
    ContainerTabBar,
    ButtonTabBarHome,
    ButtonTabBarLogout,
    TextButtonTabBarInicio,
    TextButtonTabBarLogout,
    CustomTouchableOpacity,
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
                <CustomTouchableOpacity 
                    onPress={() => navigation.navigate('TelaPrincipal')}
                >
                    <ImageLogo>
                        <Image source={home}></Image>
                    </ImageLogo>
                    <TextButtonTabBarInicio>{'Início'}</TextButtonTabBarInicio>
                </CustomTouchableOpacity>
            </ButtonTabBarHome>
            
            <ButtonTabBarLogout>
                <CustomTouchableOpacity 
                    onPress={() => navigation.navigate('Login')}
                >
                    <ImageLogo>
                        <Image source={Logout}></Image>
                    </ImageLogo>
                    <TextButtonTabBarLogout>{'Sair'}</TextButtonTabBarLogout>
                </CustomTouchableOpacity>
            </ButtonTabBarLogout>
        </ContainerTabBar>
    );
};

export default TabBar;
