import styled from "styled-components/native";

interface ButtonContainerProps {
  buttontext: string;
  onPress?: void;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 40px;
  border: ${props => props.theme.borderDefault};
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
font-family: 'NotoSansKR-Black';
  font-size: 22px;
  font-weight: 600;
  line-height: 36.2px;
  color: #ffffff;
`;