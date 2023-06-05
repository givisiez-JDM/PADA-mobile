import styled from "styled-components/native";

export const ContainerTabBar = styled.View`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  bottom: 0;
  text-align: center;
`;

export const ButtonTabBarHome = styled.View`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #334C76;
width: 50%;
`
export const ButtonTabBarLogout = styled.View`

display: flex;
align-items: center;
justify-content: center;
background-color: #D1D1D1;
width: 50%;


`

export const TextButtonTabBarInicio = styled.Text`
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

export const TextButtonTabBarLogout = styled.Text`
  color:  #334C76;
  font-size: 10px;
  text-align: center;
`;