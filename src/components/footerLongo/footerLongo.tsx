import { Dimensions, Image } from "react-native";
import footerLongoImg from "../../assets/footerLongo.png"
import { ContainerFooter } from "./footerLongo-style";


const Footer = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    
    <ContainerFooter>
        <Image

          source={footerLongoImg}
          style={{
            width: screenWidth,  
            zIndex: 1,
            resizeMode:"stretch",
          }}
        />
        </ContainerFooter>
    
  );
};

export default Footer;
