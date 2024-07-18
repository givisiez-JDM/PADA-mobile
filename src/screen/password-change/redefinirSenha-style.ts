import styled from "styled-components/native";

export const ContainerMain = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;
export const ButtonAvancar = styled.View`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border-radius: 50px;
  background: #4c7abb;
  border: none;
  text-align: center;
  margin-bottom: 75px;

  &:hover {
    background: #b4b4b4;
  }
`;


export const ContainerFooterBottom = styled.View`
  margin-top: 30px;
`;