import styled from "styled-components/native";

export const ContainerFormPatientRecord = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const ContainerInput = styled.View`
  position: relative;
  left: -20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerIconInput = styled.TextInput`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 240px;
  height: 50px;
  border-radius: 50px;
  background: #fff;
  margin-bottom: 15px;
  margin-top: 15px;
  border: 2px #4c7abb;
  z-index: -1;
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
  padding: 10px;
  color: #334c76;
  z-index: 1;
`;

export const ContainerErrorText = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const InputText = styled.Text`
  color: #ff0000;
  font-size: 10px;
  width: 250px;
`;
