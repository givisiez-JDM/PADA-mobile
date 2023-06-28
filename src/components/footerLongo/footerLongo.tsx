import { Dimensions } from "react-native";
import footerLongoImg from "../../assets/footerLongo.png";
import { ContainerFooter, ImageFooterLongo } from "./footerLongo-style";

const FooterLongo = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <ContainerFooter>
      <ImageFooterLongo
        source={footerLongoImg}
        screenWidth={JSON.stringify(screenWidth) + "px"}
      />
    </ContainerFooter>
  );
};

export default FooterLongo;
