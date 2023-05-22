import { Fragment } from "react";
import headerCurtoImg from "../../assets/headerCurto.png"
import { Dimensions, Image } from "react-native";
import { ContainerMain } from "../../screen/main/main-style";

const Header = () => {

  const screenWidth = Dimensions.get("window").width;
  

  return (
    <Fragment>
      
        <Image

          source={headerCurtoImg}
          style={{
            width: screenWidth, 
            height: 200,  
            zIndex: 1,
            resizeMode:"stretch"
          }}
          
        />
     
    </Fragment>
  );
}

  


export default Header;
