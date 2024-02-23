import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { ImageFooterCodigo } from "./footer-codigo-celular-style";

import elipse1 from "../../../assets/footer/footerSenha.png";

const FooterCodigoCelular = () => {
  return (
    <SafeAreaView>
      <ImageFooterCodigo source={elipse1} />
    </SafeAreaView>
  );
};

export default FooterCodigoCelular;
