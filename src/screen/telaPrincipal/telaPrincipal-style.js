import styled from "styled-components/native";

export const ContainerSafePrincipal = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerPrincipal = styled.View`
  position: relative;
  top: 50%;
  right: 17%;
  display: flex;
  flex-flow: row wrap;
  column-gap: 50px;
  row-gap: 30px;
  width: 100%;
  height: 90%;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 0;
  background: rgba(#d1d1d1, 0.2);
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
