import React, { useState } from "react";
import { CheckContainer, CheckOption, CheckTouch, TitleCheck } from "../Check/check-style";
import Icon from 'react-native-vector-icons/Ionicons';

const Check = (props: { onChange: (selectedOption: string) => void; options: any[]; 
  title: string; size: string; checked: boolean; multiple: boolean;  setChecked: (checked: boolean) => void;}) => {
  const [selected, setSelected] = useState("");

  function toggle(id: string) {
    if (selected === id) {
      setSelected("");
      props.onChange("");
    } else {
      setSelected(id);
      props.onChange(id);
    }
  }

  return (
    <CheckContainer>
      {props.options.map((op) => (
        <React.Fragment key={op.id}>
          <CheckOption>
            <CheckTouch selected={selected === op.id} onPress={() => toggle(op.id)}>
              {selected === op.id && <Icon name="checkmark-sharp" color="#ffff" size={17} />}
            </CheckTouch>
          </CheckOption>
          <TitleCheck>{op.text}</TitleCheck>
        </React.Fragment>
      ))}
    </CheckContainer>
  );
};

export default Check;
