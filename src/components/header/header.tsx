import { Fragment } from "react";
import headerCurtoImg from "../../assets/headerCurto.png";
import { Dimensions, StatusBar } from "react-native";
import { ContainerHeader, ImageHeader } from "./header-style";

const Header = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ContainerHeader>
        <ImageHeader
          source={headerCurtoImg}
          screenWidth={JSON.stringify(screenWidth) + "px"}
        />
      </ContainerHeader>
    </Fragment>
  );
};

export default Header;
