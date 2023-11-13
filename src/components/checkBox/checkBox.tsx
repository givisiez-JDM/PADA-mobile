import {
  ButtonViewCheckBox,
  Check,
  ContainerViewCheckBox,
  TitleCheck,
} from "./checkBox-style";
import Icon from "react-native-vector-icons/Ionicons";
const CheckBox: any = (props: {
  title: string;
  size: string;
  checked: boolean;
  setChecked?: any;
}) => {
  const handleCheckbox = () => {
    props.setChecked(!props.checked);
  };
  return (
    <ContainerViewCheckBox onPress={handleCheckbox} underlayColor="#00000000">
      <ButtonViewCheckBox>
        <Check checked={props.checked} size={props.size}>
          {props.checked ? (
            <Icon name="checkmark-outline" color="#FFFFFF" size={20} />
          ) : null}
        </Check>
        <TitleCheck>{props.title}</TitleCheck>
      </ButtonViewCheckBox>
    </ContainerViewCheckBox>
  );
};

export default CheckBox;
