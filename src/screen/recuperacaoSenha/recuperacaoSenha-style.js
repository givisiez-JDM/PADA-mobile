import styled from "styled-components/native";

export const TextRecuperacao = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #334c76;
  margin-top: 200px;
`;

export const ContainerCrie = styled.View`
  width: 300px;
  margin-top: 15px;
  margin-bottom: 30px;
  margin-left: 50px;
`;

export const ButtonContinuar = styled.View`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border-radius: 50px;
  background: #4c7abb;
  border: none;
  text-align: center;

  margin-top: 40px;

  &:hover {
    background: #b4b4b4;
  }
`;

export const ImageFooterSenha = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: ${(props) => props.screenWidth};
  height: 180px;
  z-index: 1;
`;

export const ButtonEmailSenhaContainer = styled.TextInput`
  display: flex;
  align-items: center;
  width: 240px;
  height: 50px;
  border-radius: 50px;
  background: #fff;
  margin-bottom: 15px;
  border: 2px #4c7abb;
  padding-left: 20px;
`;
