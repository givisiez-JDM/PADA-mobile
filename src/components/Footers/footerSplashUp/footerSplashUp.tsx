import React from "react";
import { ImageFooterSplashUp } from "./footerSplashUp-style";
import elipse1 from "../../../assets/elipses/elipse1.png"
import { SafeAreaView } from "react-native-safe-area-context";

const FooterSplashUp = () => {

  return (
    <SafeAreaView>
      <ImageFooterSplashUp
        source={elipse1}
      />
    </SafeAreaView>

  );
};

export default FooterSplashUp;