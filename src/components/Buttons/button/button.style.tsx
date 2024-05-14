import styled from "styled-components/native";

interface ButtonContainerProps {
  buttontext: string;
}

export const ButtonContainer = styled.View<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 40px;
  border: 2px;
  border-color: ${(props) =>
    props.buttontext === "Entrar" || props.buttontext === "Cadastrar" || props.buttontext === "Continuar"
      ? "#4C7ABB"
      : "initial"
  };
  border-radius: 50px;
  background-color: ${(props) =>
    props.buttontext === "Entrar" || props.buttontext === "Cadastrar" || props.buttontext === "Continuar" || props.buttontext === "Avançar" || props.buttontext === "Confirmar"
      ? "#4C7ABB"
      : "initial"};
`;

export const TextButton = styled.Text`
  font-size: 22px;
  font-weight: 600;
  line-height: 36.2px;
  color: #ffffff;
`;