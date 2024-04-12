import styled, { css } from "styled-components/native";

export const CheckContainer = styled.View`
  margin: 10px;
`;

export const CheckOption = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const TitleCheck = styled.Text`
margin-top: -20px;
  margin-left: 30px;
  font-weight: 600;
  font-size: 15px;
  color: #ffff;
`;

export const CheckTouch = styled.TouchableOpacity<{ selected: boolean }>`
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  background-color: #94b4dc;
  border-color: #94b4dc;

  ${(props) =>
    props.selected &&
    css`
      border-color: #ffffff;
      `}

`;

