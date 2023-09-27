import React from "react";
import {
  ContainerTabBar,
  ButtonTabBarHome,
  ButtonTabBarLogout,
  TextButtonTabBarInicio,
  TextButtonTabBarLogout,
  CustomTouchableOpacity,
  ImageLogo,
} from "../buttonTabBar/buttonTabBar-style";

import { Alert, Image } from "react-native";
import home from "../../assets/home.png";
import Logout from "../../assets/logOut.png";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import { RemoveStorage } from "../../service/requests";

const TabBar = () => {
  const navigation = useNavigation<propsStack>();
  const showAlert = () => {
    Alert.alert(
      "Alerta!",
      "Deseja deslogar ?",
      [
        {
          text: "Sim",
          onPress: () => RemoveStorage(navigation),
          style: "default",
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <ContainerTabBar>
      <ButtonTabBarHome>
        <CustomTouchableOpacity
          onPress={() => navigation.navigate("TelaPrincipal")}
        >
          <ImageLogo>
            <Image source={home}></Image>
          </ImageLogo>
          <TextButtonTabBarInicio>{"Início"}</TextButtonTabBarInicio>
        </CustomTouchableOpacity>
      </ButtonTabBarHome>

      <ButtonTabBarLogout>
        <CustomTouchableOpacity onPress={() => showAlert()}>
          <ImageLogo>
            <Image source={Logout}></Image>
          </ImageLogo>
          <TextButtonTabBarLogout>{"Sair"}</TextButtonTabBarLogout>
        </CustomTouchableOpacity>
      </ButtonTabBarLogout>
    </ContainerTabBar>
  );
};

export default TabBar;
