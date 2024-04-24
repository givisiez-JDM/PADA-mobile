import React, { Fragment } from "react";
import {StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import headerCurtoImg from "../../../assets/images/headerCurto.png";

//rafatorado
import { HeaderContainer, BackgroundHeaderContainer, ImageHeader } from "./header-style";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";

const Header = ({ back }: { back: boolean }) => {
const navigation = useNavigation<propsStack>();

  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <HeaderContainer>

        <ImageHeader source={headerCurtoImg} />
        {back ?(
          <BackgroundHeaderContainer onPress={() => { navigation.goBack() }}>



            <Icon name="chevron-back-outline" color="#000" />
          </BackgroundHeaderContainer>) : null}
      </HeaderContainer>
    </Fragment>
  )
}

export default Header;
