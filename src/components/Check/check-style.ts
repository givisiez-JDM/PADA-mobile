import styled, { css } from "styled-components/native";

export const CheckContainer = styled.View`
  margin: 8px;
`;

export const CheckOption = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const CheckOptionStyle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 1px;
`;

export const TitleCheck = styled.Text`
  margin-top: -20px;
  margin-left: 30px;
  font-weight: 600;
  font-size: 15px;
  color: #ffff;
`;

export const TitleCheckOption = styled.Text`
  margin-top: -1px;
  margin-left: 10px;
  font-weight: 300;
  font-size: 15px;
  color: #7c9dcb;
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

export const CheckTouchOption = styled.TouchableOpacity<{ selected: boolean }>`
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  background-color: #ffff;
`;
