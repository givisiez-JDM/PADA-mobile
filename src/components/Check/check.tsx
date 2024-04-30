import React, { useState } from "react";
import {
  CheckContainer,
  CheckOption,
  CheckOptionStyle,
  CheckTouch,
  CheckTouchOption,
  TitleCheck,
  TitleCheckOption
} from "../Check/check-style";
import Icon from 'react-native-vector-icons/Ionicons';

type Option = {
  id: number;
  text: string;
  color: string;
};

const Check = (props: {
  onChange: (selectedOption: Option) => void;
  options: Option[];
}) => {
  const [selected, setSelected] = useState<Option | null>(null);

  const handleToggle = (option: Option) => {
    if (selected && selected.id === option.id) {
      setSelected(null);
      props.onChange({ id: 0, text: "", color: "" });
    } else {
      setSelected(option);
      props.onChange(option);
    }
  };
  
  return (
    <CheckContainer>
      {props.options.map((op) => (
        <React.Fragment key={op.id}>
          {op.text === "Lembrar senha"? (
            <CheckOptionStyle>
              <CheckTouchOption
                selected={!!selected && selected.id === op.id}
                onPress={() => handleToggle(op)}>
                {selected && selected.id === op.id && (
                  <Icon name="checkmark-sharp" color="#7c9dcb" size={18}/>
                )}
              </CheckTouchOption>
              <TitleCheckOption>{op.text}</TitleCheckOption>
            </CheckOptionStyle>
          ) : (
            <React.Fragment>
              <CheckOption>
                <CheckTouch
                  selected={!!selected && selected.id === op.id}
                  onPress={() => handleToggle(op)} >
                  {selected && selected.id === op.id &&  (
                    <Icon name="checkmark-sharp" color="#ffff" size={17} />
                  )}
                </CheckTouch>
              </CheckOption>
              <TitleCheck>{op.text}</TitleCheck>
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </CheckContainer>
  );
};

export default Check;
