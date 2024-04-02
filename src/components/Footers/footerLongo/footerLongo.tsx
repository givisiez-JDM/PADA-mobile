import React from "react";
import { Dimensions } from "react-native";

import footerLongoImg from "../../../assets/images/footer/footerLongo.png";
import { ContainerFooter, ImageFooterLongo } from "./footerLongo-style";

const FooterLongo = () => {
  return (
    <ContainerFooter>
      <ImageFooterLongo source={footerLongoImg} />
    </ContainerFooter >
  );
};

export default FooterLongo;
