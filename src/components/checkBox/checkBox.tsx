import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  ButtonViewCheckBox,
  Check,
  TitleCheck,
  ContainerViewCheckBox,
} from "./checkBox-style";


const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
   
        <ContainerViewCheckBox onPress={handleCheckbox}>
          <ButtonViewCheckBox>
            <Check checked={checked}>
              {checked && (
                <Icon name="checkmark-outline" size={10} color="#fff" />
              )}
            </Check>
            <TitleCheck>Lembrar minha escolha</TitleCheck>
          </ButtonViewCheckBox>
        </ContainerViewCheckBox>
        
  );
};

export default CheckBox;
