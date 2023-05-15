import { Dimensions, Image } from "react-native";
import { ContainerFooter } from "./footer-style";

import Elipse from "../../assets/elipse03.png";
import Elipse1 from "../../assets/elipse04.png";

const Footer = () => {
  const widthElipse = Dimensions.get("screen").width;
  return (
    <ContainerFooter>
      <Image
        source={Elipse}
        style={{
          width: widthElipse,
          height: 200,
          zIndex: 1,
          position: "absolute",
          bottom: -10,
          left: 0,
          resizeMode: "contain",
        }}
      />
      <Image
        source={Elipse1}
        style={{
          width: widthElipse,
          height: 130,
          zIndex: 2,
          position: "absolute",
          bottom: -15,
          left: 0,
          resizeMode: "contain",
        }}
      />
    </ContainerFooter>
  );
};

export default Footer;
