import styled from "styled-components/native";

export const ButtonDoctorContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 220px;
  height: 44px;
  border-radius: 50px;
  background: #4C7ABB;
  border: none;
  text-align: center;
  margin-bottom: 7px;

  &:hover {
    background: #b4b4b4;
  }
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  padding: 2px;
  font-weight: 500;
 text-align: center;
 margin-left: 20px;
 
`;

export const ButtonImageIcon = styled.View`
margin: 12px;
padding: 3px;
padding-bottom: 2px;
`;



