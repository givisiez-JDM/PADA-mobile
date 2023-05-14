import { Fragment } from "react";
import { ContainerBack, ContainerHeader } from "./header-style";
import Elipse from "../../assets/elipse01.png";
import Elipse1 from "../../assets/elipse02.png";
import { Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
interface checkBack {
  status: boolean;
}

const Header = ({ status }: checkBack) => {
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
      {status !== false ? (
        <ContainerBack>
          <Icon name="chevron-back-outline" size={15} color="#4C7ABB" />
        </ContainerBack>
      ) : null}
    </Fragment>
  );
};

export default Header;
