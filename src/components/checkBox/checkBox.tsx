import React from "react";
import { ButtonViewCheckBox, Check, TitleCheck } from "./checkBox-style";
import Icon from "react-native-vector-icons/Ionicons";

interface CheckBoxProps {
  title: string;
  size: number;
  checked: boolean;
  setChecked?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  title,
  size,
  checked,
  setChecked,
}) => {
  const handleCheckbox = () => {
    if (setChecked) {
      setChecked(!checked);
    } else {
      console.warn("setChecked is not provided");
    }
  };

  return (
    <ButtonViewCheckBox onPress={handleCheckbox}>
      <>
        <Check checked={checked} size={size}>
          {checked ? (
            <Icon name="checkmark-outline" color="#FFFFFF" size={20} />
          ) : null}
        </Check>
        <TitleCheck>{title}</TitleCheck>
      </>
    </ButtonViewCheckBox>
  );
};

export default CheckBox;
