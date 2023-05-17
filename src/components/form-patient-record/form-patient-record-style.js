import styled from "styled-components/native";

export const ContainerIconForm = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const IconForm = styled.View`
  width: 25px;
  height: 25px;
  background: #4c7abb;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
`;

export const ContainerIconInput = styled.View`
  width: 25px;
  border-bottom-width: 2px;
  border-bottom-color: #4c7abb;
  padding: 10px;
  position: relative;
  left: 2px;
`;

export const Input = styled.TextInput`
  width: 260px;
  border-bottom-width: 2px;
  border-bottom-color: #4c7abb;
  padding: 10px;
  color: #334c76;
  z-index: 1;
`;
