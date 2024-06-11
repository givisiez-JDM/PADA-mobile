import React, { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ContainerTabBar, ButtonTabBarHome, ButtonTabBarLogout, TextButtonTabBarInicio, TextButtonTabBarLogout, CustomTouchableOpacity, ImageLogo, ButtonTabBarHomeSecundary, TextButtonTabBar } from "./buttonTabBar-style";
import home from "../../../assets/images/headerAndFooter/footer/home.png";
import Logout from "../../../assets/images/headerAndFooter/footer/logOut.png";
import BlueHome from "../../../assets/images/headerAndFooter/footer/BlueHome.png";
import ModalExit from "../../Modals/modalExit/modalExit"

const TabBar = (props: { typeHeader?: string }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const showAlert = () => {
    setModalVisible(true);
  };

  return (
    <ContainerTabBar>
      {props.typeHeader === "patient" ? (
        <ButtonTabBarHome>
          <CustomTouchableOpacity onPress={() => navigation.navigate("TelaPrincipal")}>
            <ImageLogo>
              <Image source={home} />
            </ImageLogo>
            <TextButtonTabBarInicio>Início</TextButtonTabBarInicio>
          </CustomTouchableOpacity>
        </ButtonTabBarHome>
      ) : (
        <ButtonTabBarHomeSecundary>
          <CustomTouchableOpacity onPress={() => navigation.navigate("TelaPrincipal")}>
            <ImageLogo>
              <Image source={BlueHome} />
            </ImageLogo>
            <TextButtonTabBar>Início</TextButtonTabBar>
          </CustomTouchableOpacity>
        </ButtonTabBarHomeSecundary>
      )}

      <ButtonTabBarLogout>
        <CustomTouchableOpacity onPress={showAlert}>
          <ImageLogo>
            <Image source={Logout} />
          </ImageLogo>
          <TextButtonTabBarLogout>Sair</TextButtonTabBarLogout>
        </CustomTouchableOpacity>
      </ButtonTabBarLogout>

      <ModalExit modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </ContainerTabBar>
  );
};

export default TabBar;
