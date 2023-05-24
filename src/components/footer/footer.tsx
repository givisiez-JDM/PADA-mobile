import { Dimensions, Image } from "react-native";
import footerCurtoImg from "../../assets/footerCurto.png"
import { ContainerMain } from "../../screen/loginCadastro/loginCadastro-style";

const Footer = () => {
  const screenWidth = Dimensions.get("window").width;
  return (
    
    <ContainerMain>
        <Image

          source={footerCurtoImg}
          style={{
            width: screenWidth, 
            height: 200,  
            zIndex: 1,
            resizeMode:"stretch",
          }}
        />
        </ContainerMain>
    
  );
};

export default Footer;
