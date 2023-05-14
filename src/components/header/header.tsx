import { Fragment } from "react";
import { ContainerHeader } from "./header-style";
import Elipse from "../../assets/elipse01.png";
import Elipse1 from "../../assets/elipse02.png";
import { Dimensions, Image } from "react-native";
interface checkBack {
  status: boolean;
}

const Header = () => {
  const widthElipse = Dimensions.get("screen").width;

  return (
    <Fragment>
      <ContainerHeader>
        <Image
          source={Elipse}
          style={{
            width: widthElipse + 10,
            height: 200,
            zIndex: 2,
            position: "absolute",
            right: 5,
            resizeMode: "contain",
          }}
        />
        <Image
          source={Elipse1}
          style={{
            width: widthElipse + 20,
            height: 220,
            zIndex: 1,
            position: "relative",
            top: 2,
            left: -10,
            resizeMode: "contain",
          }}
        />
      </ContainerHeader>
    </Fragment>
  );
};

export default Header;
