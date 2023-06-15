import Icon from "react-native-vector-icons/Ionicons";
import {
  ButtonViewCheckBox,
  Check,
  ContainerViewCheckBox,
  TitleCheck,
} from "./checkBox-style";
import { useState } from "react";

const CheckBox = (props: {
  title: string;
  size: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCheckbox = () => {
    props.setChecked(!props.checked);
  };
  return (
    <ContainerViewCheckBox onPress={handleCheckbox} underlayColor="#00000000">
      <ButtonViewCheckBox>
        <Check checked={props.checked} size={props.size}></Check>
        <TitleCheck>{props.title}</TitleCheck>
      </ButtonViewCheckBox>
    </ContainerViewCheckBox>
  );
};

export default CheckBox;
