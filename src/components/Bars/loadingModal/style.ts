import styled from "styled-components/native";
import { padaTheme } from "@/src/theme/pada-theme";
import { StyleSheet } from "react-native";

export const LoadingComponent = styled.Modal`
flex: 1;
 justify-content: center;
 align-items: center;
 background: rgba(255, 255, 255);
`;
export const ContainerModalLoading = styled.View`
flex:1;
align-self: center;
justify-content: center;
border-radius: 10px;
background: #fff;
`;