import { Dimensions } from "react-native";
import footerCurtoImg from "../../assets/footerCurto.png";
import { ContainerFooter, ImageFooterCurto } from "./footer-style";
import { Fragment } from "react";

const Footer = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <Fragment>
      <ContainerFooter>
        <ImageFooterCurto
          source={footerCurtoImg}
          screenWidth={JSON.stringify(screenWidth) + "px"}
        />
      </ContainerFooter>
    </Fragment>
  );
};

export default Footer;
