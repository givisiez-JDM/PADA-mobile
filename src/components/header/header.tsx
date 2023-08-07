import { Fragment } from "react";
import headerCurtoImg from "../../assets/headerCurto.png";
import { Dimensions, StatusBar } from "react-native";
import { ContainerBack, ContainerHeader, ImageHeader } from "./header-style";
import Icon from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";

const Header = (props: { back: boolean }) => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation<propsStack>();
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ContainerHeader>
        {props.back === true ? (
          <ContainerBack
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-back-outline" color="#000" />
          </ContainerBack>
        ) : null}
        <ImageHeader
          source={headerCurtoImg}
          screenWidth={JSON.stringify(screenWidth) + "px"}
        />
      </ContainerHeader>
    </Fragment>
  );
};

export default Header;
