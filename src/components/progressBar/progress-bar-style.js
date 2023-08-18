import styled from "styled-components/native";

export const ContainerComponentProgressBar = styled.View`
  width: 236px;
  height: 8px;
  background-color: #4c7abb;
  border-radius: 20px;
  margin-left: 10px;
  margin-top: 5px;
`;

export const Progress = styled.View`
  width: ${(props) => props.progress};
  height: 100%;
  background-color: #7eb2ff;
  border-radius: 10px;
`;

export const NeonSide = styled.View`
  position: absolute;
  top: -5px;
  bottom: 0;
  right: -4px;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  shadow-color: rgba(54, 201, 248, 1);
  shadow-offset: 10px 10px;
  shadow-opacity: 1;
  shadow-radius: 30px;
  blur-radius: 30px;
  elevation: 30;
`;
