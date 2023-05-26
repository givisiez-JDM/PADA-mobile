import { Dimensions, Image } from "react-native";
import footerCurtoImg from "../../assets/footerCurto.png"
import { ContainerMain } from "../../screen/loginCadastro/loginCadastro-style";
import { ContainerFooter } from "./footer-style";

const Footer = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    
    <ContainerFooter>
        <Image

          source={footerCurtoImg}
          style={{
            width: screenWidth, 
            height: 200,  
            zIndex: 1,
            resizeMode:"stretch",
          }}
        />
        </ContainerFooter>
    
  );
};

export default Footer;
