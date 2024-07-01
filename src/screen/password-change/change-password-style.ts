import styled from "styled-components/native";

export const ContainerMain = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center; 
  align-items: center;  
`;

export const TextRedefinir = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #4C7ABB;
`;

export const ContainerTextPass = styled.View`
  width: 90%;
  align-items: flex-start; 
  margin-top: 5px; 
`;

export const TextPass = styled.Text`
  font-size: 8px;
  font-weight: 300;
  color: #4C7ABB;
  text-align: left;
  padding-left: 68px;
`;

export const TextEnviaremos = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: #334c76;
`;

export const TextEnviaremos1 = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: #334c76;
  margin-left: 40px;
`;

export const ContainerEnviaremos = styled.View`
  width: 300px;
  margin-top: 20px;
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

export const ImageIconLogoRedefinir = styled.Image`
  margin-top: 150px;
  margin-bottom: 30px;
  width:63px;
  height:71px;
`;

export const ContainerFooterBottom = styled.View`
  margin-top: 30px;
`;
