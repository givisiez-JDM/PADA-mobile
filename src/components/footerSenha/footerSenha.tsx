import { Dimensions } from "react-native";
import footerSenhaImg from "../../assets/footerSenha.png"
import { ContainerFooter, ImageFooterLongo } from "./footerSenha-style"

const FooterSenha = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <ContainerFooter>
      <ImageFooterLongo
        source={footerSenhaImg}
        screenWidth={JSON.stringify(screenWidth) + "px"}
      />
    </ContainerFooter>
  );
};

export default FooterSenha;
