import { Dimensions, Image } from "react-native";
import footerCurtoImg from "../../assets/footerCurto.png"
import { ContainerFooter } from "./footer-style";
import { Fragment } from "react";
import { ContainerMain } from "../main/main-style";

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
          }}
        />
        </ContainerMain>
    
  );
};

export default Footer;
