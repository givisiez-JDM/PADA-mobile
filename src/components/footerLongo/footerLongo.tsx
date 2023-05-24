import { Dimensions, Image } from "react-native";
import footerLongoImg from "../../assets/footerLongo.png";
import { ContainerFooter } from "./footerLongo-style";
import { Fragment } from "react";
import { ContainerMain } from "../../screen/loginCadastro/loginCadastro-style";

const Footer = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <ContainerFooter>
      <Image
        source={footerLongoImg}
        style={{
          width: screenWidth,
          zIndex: 1,
          resizeMode: "stretch",
        }}
      />
    </ContainerFooter>
  );
};

export default Footer;
