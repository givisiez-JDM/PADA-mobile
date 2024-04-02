import React from "react";
import { Dimensions } from "react-native";

import footerCurtoImg from "../../../assets/images/footer/footerCurto.png";

import { ContainerFooter, ImageFooterCurto } from "./footer-style";

const Footer = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ContainerFooter>
      <ImageFooterCurto source={footerCurtoImg} />
    </ContainerFooter>
  )
}

export default Footer;
