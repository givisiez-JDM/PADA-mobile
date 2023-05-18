import { Fragment } from "react";
import headerCurtoImg from "../../assets/headerCurto.png"
import { Dimensions, Image } from "react-native";

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
          
          }}
        />
     
    </Fragment>
  );
}

  


export default Header;
