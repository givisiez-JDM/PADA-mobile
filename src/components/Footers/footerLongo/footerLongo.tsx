import React from "react";
import { Dimensions } from "react-native";

import footerLongoImg from "../../../assets/footer/footerLongo.png";
import { ContainerFooter, ImageFooterLongo } from "./footerLongo-style";

const FooterLongo = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <ContainerFooter screenWidth={JSON.stringify(screenWidth) + "px"} >
      <ImageFooterLongo source={footerLongoImg} />
    </ContainerFooter >
  );
};

export default FooterLongo;
