import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { padaTheme } from "@/src/theme/pada-theme";

export const ContainerComponentProgressBar = styled.View`
  width: 80%;
  height: 8px;
  background-color: #4c7abb;
  border-radius: 20px;
  margin-left: 10px;
  margin-top: 5px;
`;

interface ProgressProps {
  progress: number;
}

export const Progress = styled.View<ProgressProps>`
  width: ${(props) => props.progress + 'px'};
  height: 100%;
  background-color: #7eb2ff;
  border-radius: 10px;
`;

export const NeonSide = styled.View`
  /* position: absolute;
  top: -5px;
  bottom: 0;
  right: -4px; */
  width: 18px;
  height: 18px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  /* shadow-color: rgba(54, 201, 248, 1);
  shadow-offset: 10px 10px;
  shadow-opacity: 1;
  shadow-radius: 30px;
  blur-radius: 30px;
  elevation: 30; */
`;
const styles = StyleSheet.create({
  container: {
    width: 236,
    height: 8,
    //border: 
    backgroundColor: padaTheme.colors.secondary
  },
  buttonText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 24,
    color: padaTheme.colors.white
  },
  containerModal :{
    width: 203,
    height: 8,
    backgroundColor: padaTheme.colors.secondary,
    borderRadius: 20, 
    marginLeft: 10,
  }
})

export default styles;