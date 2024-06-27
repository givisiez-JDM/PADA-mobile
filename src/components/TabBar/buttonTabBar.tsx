import React from "react";
import { Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ContainerTabBar,
  ButtonTabBarHome,
  ButtonTabBarLogout,
  TextButtonTabBarInicio,
  TextButtonTabBarLogout,
  CustomTouchableOpacity,
  ImageLogo,
  ButtonTabBarHomeSecundary, TextButtonTabBar
} from "./buttonTabBar-style";
import { RemoveStorage } from "../../service/requests";
import { propsStack } from "../../routes/Stack/Models";
import home from "../../assets/images/headerAndFooter/footer/home.png";
import Logout from "../../assets/images/headerAndFooter/footer/logOut.png";
import BlueHome from "../../assets/images/headerAndFooter/footer/BlueHome.png";


const TabBar = (props: { typeHeader?: string }) => {
  const navigation = useNavigation<propsStack>();

  const showAlert = () => {
    Alert.alert(
      "Alerta!",
      "Deseja deslogar?",
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


  return props.typeHeader === "patient" ? (
    <ContainerTabBar>
      <ButtonTabBarHome>
        <CustomTouchableOpacity onPress={() => navigation.navigate("Home")}>
          <ImageLogo>
            <Image source={home} />
          </ImageLogo>
          <TextButtonTabBarInicio>Início</TextButtonTabBarInicio>
        </CustomTouchableOpacity>
      </ButtonTabBarHome>

      <ButtonTabBarLogout>
        <CustomTouchableOpacity onPress={() => showAlert()}>
          <ImageLogo>
            <Image source={Logout} />
          </ImageLogo>
          <TextButtonTabBarLogout>Sair</TextButtonTabBarLogout>
        </CustomTouchableOpacity>
      </ButtonTabBarLogout>
    </ContainerTabBar>
  ) : (
    <ContainerTabBar>
      <ButtonTabBarHomeSecundary>
        <CustomTouchableOpacity onPress={() => navigation.navigate("Home")}>
          <ImageLogo>
            <Image source={BlueHome} />
          </ImageLogo>
          <TextButtonTabBar>Início</TextButtonTabBar>
        </CustomTouchableOpacity>
      </ButtonTabBarHomeSecundary>

      <ButtonTabBarLogout>
        <CustomTouchableOpacity onPress={() => showAlert()}>
          <ImageLogo>
            <Image source={Logout} />
          </ImageLogo>
          <TextButtonTabBarLogout>Sair</TextButtonTabBarLogout>
        </CustomTouchableOpacity>
      </ButtonTabBarLogout>
    </ContainerTabBar>
  );
};

export default TabBar;


