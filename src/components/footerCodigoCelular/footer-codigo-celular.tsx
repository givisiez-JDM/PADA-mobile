import elipse1 from "../../assets/footerSenha.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageFooterCodigo } from "./footer-codigo-celular-style";

const FooterCodigoCelular = () => {
  return (
    <SafeAreaView>
      <ImageFooterCodigo source={elipse1} />
    </SafeAreaView>
  );
};

export default FooterCodigoCelular;
