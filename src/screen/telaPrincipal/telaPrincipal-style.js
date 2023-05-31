import styled from "styled-components/native";

export const ContainerSafePrincipal = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerPrincipal = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  z-index: 0;
  background: #d1d1d1;
`;

export const ContainerTelaPrincipal = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 0;
  background: #fff;
`;

export const Tab = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
