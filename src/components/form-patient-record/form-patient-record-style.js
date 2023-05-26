import styled from "styled-components/native";

export const ContainerFormPatientRecord = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ContainerIconInput = styled.View`
  justify-content: center;
  align-items: center;
  width: 25px;
  border-bottom-width: 2px;
  border-bottom-color: #4c7abb;
  position: relative;
  left: 5px;
`;

export const IconForm = styled.View`
  width: 25px;
  height: 25px;
  background: #4c7abb;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 260px;
  border-bottom-width: 2px;
  border-bottom-color: #4c7abb;
  padding: 10px;
  color: #334c76;
  z-index: 1;
`;

export const ContainerErrorText = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const InputText = styled.Text`
  color: #ff0000;
  font-size: 10px;
  width: 250px;
`;

/*export const ContainerIconForm = styled.View`
  position: relative;
  display: flex;
`;

export const IconForm = styled.View`
  width: 25px;
  height: 25px;
  background: #4c7abb;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const ContainerIconInput = styled.View`
  width: 25px;
  height: 26px;
  border-bottom-width: 2px;
  border-bottom-color: #4c7abb;
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 23px;
  left: -20px;
`;

export const ContainerTextInput = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.TextInput`
  width: 260px;
  border-bottom-width: 2px;
  border-bottom-color: #4c7abb;
  padding: 10px;
  color: #334c76;
  z-index: 1;
`;

export const InputText = styled.Text`
  color: "red";
`;
*/
