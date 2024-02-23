import React, { Fragment } from "react";
import { Dimensions } from "react-native";

import footerCurtoImg from "../../../assets/footer/footerCurto.png";

import { ContainerFooter, ImageFooterCurto, FooterText } from "./footer-style";

const Footer = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ContainerFooter screenWidth={JSON.stringify(screenWidth) + "px"}>
      <ImageFooterCurto source={footerCurtoImg} />
    </ContainerFooter>
  )
}

export default Footer;
