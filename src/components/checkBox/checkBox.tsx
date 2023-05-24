import Icon from "react-native-vector-icons/Ionicons";
import {
  ButtonViewCheckBox,
  Check,
  ContainerViewCheckBox,
  TitleCheck,
} from "./checkBox-style";
import { useState } from "react";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <ContainerViewCheckBox onPress={handleCheckbox} underlayColor="#00000000">
      <ButtonViewCheckBox>
        <Check checked={checked}></Check>
        <TitleCheck>Lembrar minha escolha</TitleCheck>
      </ButtonViewCheckBox>
    </ContainerViewCheckBox>
  );
};


export default CheckBox;
