import styled from "styled-components/native";

interface ButtonContainerProps {
  buttontext: string;
}

export const ButtonContainer = styled.View<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => {
    switch (props.buttontext) {
      case "Editar perfil":
        return "145px";
      case "Entrar":
      case "Cadastrar":
      case "Continuar":
        return "220px";
      default:
        return "220px";
    }
  }};
  height: 40px;
  border-width: 2px;
  border-color: ${(props) => {
    switch (props.buttontext) {
      case "Entrar":
      case "Cadastrar":
      case "Continuar":
        return "#4C7ABB";
      default:
        return "initial";
    }
  }};
  border-radius: 50px;
  background-color: ${(props) => {
    switch (props.buttontext) {
      case "Entrar":
      case "Cadastrar":
      case "Continuar":
      case "Avançar":
      case "Confirmar":
      case "Editar perfil":
        return "#4C7ABB";
      default:
        return "initial";
    }
  }};
`;

export const TextButton = styled.Text<ButtonContainerProps>`
  font-size: ${(props) => {
    switch (props.buttontext) {
      case "Editar perfil":
        return "16px";
      default:
        return "22px";
    }
  }};
  font-weight: 600;
  line-height: 36.2px;
  color: #ffffff;
  text-align: center;
`;
